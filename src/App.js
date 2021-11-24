import './App.css';
import MainFrame from './components/MainFrame';

// import { ethers } from "ethers";

// async function connect(){
//   const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
//   // Prompt user for account connections
//   await provider.send("eth_requestAccounts", []);
//   const signer = provider.getSigner();
//   console.log("Account:", await signer.getAddress());
// }


function App() {
  // await window.ethereum.enable();
  // const provider = new ethers.providers.Web3Provider(window.ethereum);

  // // There is only ever up to one account in MetaMask exposed
  // const signer = provider.getSigner();
  // connect();

  return (
    <MainFrame />
  );
}

export default App;