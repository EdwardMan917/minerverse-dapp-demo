import { createStore } from "redux";
import rootReducers from "./index";

const store: any = createStore(rootReducers);

export default store;