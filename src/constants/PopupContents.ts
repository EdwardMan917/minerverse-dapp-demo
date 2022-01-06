import { IPopupContent } from "src/interfaces/AppInterfaces";

export const PopupContents: IPopupContent = {
  connectWallet: {
    title: "Oops!",
    content: "Please connect a wallet.",
    buttonName: "Continue"
  },
  incorrectAmount: {
    title: "Oops!",
    content: "Please enter correct amount.",
    buttonName: "Continue"
  },
  succeeded: {
    title: "Woohoo!",
    content: "Transaction succeeded.",
    buttonName: "Back To Convert"
  },
  failed: {
    title: "Oops!",
    content: "Transaction failed.",
    buttonName: "Please Try Again"
  },
  approveSucceeded: {
    title: "Woohoo!",
    content: "Approval succeeded.",
    buttonName: "OK"
  },
  approveFailed: {
    title: "Oops!",
    content: "Approval failed.",
    buttonName: "Please Try Again"
  }
}