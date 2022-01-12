import apyReducer from "./APYReducer";
import { combineReducers } from "redux";
import WalletAccountReducer from "./WalletAccountReducer";

// The key of this object will be the name of the store
const rootReducers = combineReducers(
  { 
    apy: apyReducer,
    account: WalletAccountReducer
  }
);

export default rootReducers;