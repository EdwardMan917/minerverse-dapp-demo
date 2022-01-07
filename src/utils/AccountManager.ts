import { ethers } from "ethers";
import { updateAccount, updateProvider, updateSigner } from "src/redux/action";
import store from "src/redux/store";
import { connectWallet } from "./wallet";

class AccountManager {

  static instance: AccountManager;

  public static getInstance(): AccountManager {
    if (!AccountManager.instance) {
      AccountManager.instance = new AccountManager();
    }
    return AccountManager.instance;
  }

  public async init(){
    
  }

  public accountChange() {

  }
  
}

export const accountManager = AccountManager.getInstance();