import apyReducer from "./apy";
import { combineReducers } from "redux";

// The key of this object will be the name of the store
const rootReducers = combineReducers({ apy: apyReducer });

export default rootReducers;