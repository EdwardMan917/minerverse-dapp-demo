import { ethers } from "ethers";

export async function connect(){
  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  // Prompt user for account connections
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  let address = await signer.getAddress();
  console.log("Account:", address);
  return address;
}

