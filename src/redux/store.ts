import { createStore, EmptyObject } from "redux";
import rootReducers from "./index";

const store = createStore(rootReducers);

export default store;