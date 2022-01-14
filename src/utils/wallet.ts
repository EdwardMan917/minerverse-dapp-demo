import { BigNumber, ethers } from "ethers";
import { formatEther } from "@ethersproject/units";

import ERC20 from "src/abi/ERC20.json";
import ZapBSC from "src/abi/ZapBSC.json";
import PriceCalculatorBSC from "src/abi/PriceCalculatorBSC.json";

import { LPToken, NativeToken, Token } from "src/constants/Tokens";
import Contracts from "src/constants/Contracts";
import { ITokenPair } from "src/interfaces/AppInterfaces";
import store from "src/redux/store";
import { updateAccount, updateProvider, updateSigner, disconnect } from "src/redux/action";
import WalletConnectProvider from "@walletconnect/web3-provider";

let networkData = [
  {
    chainId: "0x61",
    chainName: "BSCTESTNET",
    rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
    nativeCurrency: {
      name: "BINANCE COIN",
      symbol: "BNB",
      decimals: 18,
    },
    blockExplorerUrls: ["https://testnet.bscscan.com/"],
  },
];


export async function connectWithWalletConnect() {
  try{
    //  Create WalletConnect Provider
    const provider = new WalletConnectProvider({
      rpc: { // chainId: rpc endpoint
        97: "https://data-seed-prebsc-1-s1.binance.org:8545"
      },
    });

    //  Enable session (triggers QR Code modal)
    await provider.enable();
    const web3Provider = new ethers.providers.Web3Provider(provider);
    let account = await updateAccountState(provider, web3Provider, true);
    console.log(account);
    return account;
  } catch (e){
    console.log(e);
  }
}


export async function connectWallet() {
  try{
    let wallet = window.ethereum;
    if(!wallet) return;
    
    window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: networkData,
    })

    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    let account = await updateAccountState(wallet, provider, false);
    return account;
  } catch (e) {
    return;
  }
}

export async function disconnectWallet() {
  try{
    store.dispatch(disconnect());
  } catch (e){
    console.log(e);
  }
  
}

  
async function updateAccountState(wallet: any, provider: any, isWalletConnectProvider: boolean) {
  store.dispatch(updateProvider(provider));

  // Force page refreshes on network changes
  provider.on("network", (newNetwork: any, oldNetwork: any) => {
      // When a Provider makes its initial connection, it emits a "network"
      // event with a null oldNetwork along with the newNetwork. So, if the
      // oldNetwork exists, it represents a changing network
      if (oldNetwork) {
        window.location.reload();
      }
  });

  wallet.on('accountsChanged', async (accounts: string[]) => {
    // Handle the new accounts, or lack thereof.
    // "accounts" will always be an array, but it can be empty.
    store.dispatch(updateAccount(accounts[0]));
  });

  wallet.on('disconnect', (error: any) => {
    store.dispatch(disconnect());
  });

  if(!isWalletConnectProvider){
    // Prompt user for account connections
    await provider.send("eth_requestAccounts", []);
  }
  
  const signer = provider.getSigner();
  let accounts = await provider.listAccounts();
  store.dispatch(updateAccount(accounts[0]));
  store.dispatch(updateSigner(signer));
  return accounts[0];
}


/**
 * @summary Get token balance of connected account
 * 
 * @description Request to balanceOf function of ERC20 standard tokens.
 * 
 * @param string tokenType    type of token: native token, token, LP token
 * @param string tokenAddress token contract address
 *
 */
export async function getBalance(tokenType: string, tokenAddress: string) {
  try{
    let myStore = store.getState();
    const provider = myStore.account.provider;
    if(!provider) return;
    const address = await provider.listAccounts();
    let result;
    switch (tokenType) {
      case NativeToken:
        result = await provider.getBalance(address[0]);
        break;
      case LPToken:
      case Token:
        const contract = new ethers.Contract(tokenAddress, ERC20, provider);
        result = await contract.balanceOf(address[0]);
        break
      default:
        return "-";
    }
    return parseFloat(formatEther(result.toString())).toFixed(4);  
  } catch (e){
    console.log(e);
    return "-";
  }
  
}


export async function getConversionRate(tokenPair: ITokenPair) {
  try{
    let myStore = store.getState();
    const provider = myStore.account.provider;
    if(!provider) return;
    const contract = new ethers.Contract(Contracts.priceCalculatorBSC, PriceCalculatorBSC, provider);
    
    let fromTokenPrice;
    let toTokenPrice;

    if (tokenPair.from.type === NativeToken) {
      fromTokenPrice = formatEther(await contract.priceOfBNB());
      toTokenPrice = formatEther((await contract.pricesInUSD([tokenPair.to.address]))[0]);
    } else if (tokenPair.to.type === NativeToken) {
      fromTokenPrice = formatEther((await contract.pricesInUSD([tokenPair.from.address]))[0]);
      toTokenPrice = formatEther(await contract.priceOfBNB());
    } else {
      let prices: BigNumber[] = await contract.pricesInUSD([tokenPair.from.address, tokenPair.to.address]);
      fromTokenPrice = formatEther(prices[0]);
      toTokenPrice = formatEther(prices[1]);
    }
    
    let rate = (parseFloat(fromTokenPrice) / parseFloat(toTokenPrice)).toFixed(5);
    return rate === "Infinity" ? "0.00000" : rate; 
  } catch (e){
    console.log(e);
    return "0.00000";
  }
}


export async function doSwap(tokenPair: ITokenPair) {
  try {
    let myStore = store.getState();
    const provider = myStore.account.provider;
    if(!provider) return;
    const signer = provider.getSigner();
    const contract = new ethers.Contract(Contracts.zapBSC, ZapBSC, signer);
    let fromAmount = ethers.utils.parseEther(tokenPair.from.amount);
    let transaction;
    if (tokenPair.from.type === NativeToken) { // native token to token
      transaction = await contract.zapIn(tokenPair.to.address, { value: fromAmount });
    } else if (tokenPair.to.type === NativeToken) { // token to native token
      transaction = await contract.zapOut(tokenPair.from.address, fromAmount);
    } else { // token to token
      transaction =  await contract.zapInToken(tokenPair.from.address, fromAmount, tokenPair.to.address);
    }
    await transaction.wait(); 
    return "success";
  } catch (e) {
    console.log(e);
    return "fail";
  }
  
}