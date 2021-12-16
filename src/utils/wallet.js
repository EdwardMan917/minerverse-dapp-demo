import { ethers } from "ethers";

import FundMe from "../artifacts/contracts/FundMe.sol/FundMe.json";
import TUSDT from "../artifacts/contracts/TUSDT.sol/TUSDT.json";

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

export async function getConnectedAccount() {
  return await window.ethereum.selectedAddress;
}


export async function connectWallet() {
  // const provider = new ethers.providers.getDefaultProvider();
  window.ethereum.request({
    method: "wallet_addEthereumChain",
    params: networkData,
  })
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");


  // Force page refreshes on network changes
// {
//   provider.on("network", (newNetwork, oldNetwork) => {
//       // When a Provider makes its initial connection, it emits a "network"
//       // event with a null oldNetwork along with the newNetwork. So, if the
//       // oldNetwork exists, it represents a changing network
//       if (oldNetwork) {
//           window.location.reload();
//       }
//   });
// }

  // Prompt user for account connections
  await provider.send("eth_requestAccounts", []);
  let accounts = await provider.listAccounts();
  console.log("accounts:", await accounts);
  const signer = provider.getSigner();
  let address = await signer.getAddress();
  return await address;
}

export async function requestAccount() {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
}

// call the smart contract, read the current greeting value
export async function getConversionRate(ethAmount) {
  // if (typeof window.ethereum !== 'undefined') {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum)
  //   const contract = new ethers.Contract("0x5FbDB2315678afecb367f032d93F642f64180aa3", FundMe.abi, provider)
  //   console.log(contract);
  //   try {
  //     const data = await contract.test();
  //     console.log('data: ', data)
  //   } catch (err) {
  //     console.log("Error: ", err)
  //   }
  // }

  if (typeof window.ethereum !== 'undefined') {
    await requestAccount()
    // get provider
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    // get address
    let addresses = await provider.listAccounts();
    let address = await addresses[0];
    console.log("Address : " + await address);

    // get balance
    let balance = await provider.getBalance(await address);
    console.log("Account balance : " + ethers.utils.formatEther(await balance));

    // get signer, required for transactions
    const signer = provider.getSigner()

    // init contract instance
    const contract = new ethers.Contract("0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9", FundMe.abi, signer)

    // interact with contract functions
    const transaction = await contract.fund({ value: ethers.utils.parseEther("20") });

    // await transaction to finish
    await transaction.wait()
  }
}


const TUSDTContractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512";

export async function getContractBalance() {
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
    const contract = new ethers.Contract("0x0dcd1bf9a1b36ce34237eeafef220932846bcd82", FundMe.abi, provider)
    try {
      const data = await contract.balance();
      console.log('Contract balance: ', ethers.utils.formatEther(data.toString()));
    } catch (err) {
      console.log("Error: ", err)
    }
  }
}

export async function getTotalSupply() {
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const contract = new ethers.Contract(TUSDTContractAddress, TUSDT.abi, provider)
    try {
      const data =  await contract.totalSupply();
      console.log('Total Supply ', ethers.utils.formatEther(data.toString()));
    } catch (err) {
      console.log("Error: ", err)
    }
  }    
}

export async function allowance() {
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(TUSDTContractAddress, TUSDT.abi, provider)
    try {
      const data =  await contract.allowance("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", await signer.getAddress());
      console.log('allowance ', ethers.utils.formatEther(data.toString()));
    } catch (err) {
      console.log("Error: ", err)
    }
  }    
}

// call the smart contract, send an update
export async function buy() {
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(TUSDTContractAddress, TUSDT.abi, signer)
    const transaction =  await contract.buy({ value: ethers.utils.parseEther("20") })
    await transaction.wait()
  }    
}

// call the smart contract, send an update
export async function convert() {
  if (typeof window.ethereum !== 'undefined') {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(TUSDTContractAddress, TUSDT.abi, signer)
    const transaction =  await contract.transferFrom("0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266", await signer.getAddress(), 20)
    await transaction.wait()
  }    
}

