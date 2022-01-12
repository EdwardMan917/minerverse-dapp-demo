const WalletAccountReducer = (state = {}, action: { type: any; payload: any; }) => {

  let AccountState: { [key: string]: any } = Object.assign({}, state);

  switch (action.type) {
    case "UPDATE_ACCOUNT":
      AccountState["address"] = action.payload;
      break;
    case "UPDATE_PROVIDER":
      AccountState["provider"] = action.payload;
      break;
    case "UPDATE_SIGNER":
      AccountState["signer"] = action.payload;
      break;
    case "DISCONNECT":
      AccountState["address"] = null;
      AccountState["provider"] = null;
      AccountState["signer"] = null;
      break;
    default:
      break;
  }

  return AccountState;
};

export default WalletAccountReducer;