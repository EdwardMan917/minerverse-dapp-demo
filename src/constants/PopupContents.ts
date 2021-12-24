import { IPopupContent } from "src/interfaces/AppInterfaces";

export const PopupContents: IPopupContent = {
  sameToken: {
    title: "Oops!",
    content: "Cannot swap with same token.",
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
  }
}