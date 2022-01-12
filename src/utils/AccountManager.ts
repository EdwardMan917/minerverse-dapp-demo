
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