import { legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

const store = createStore(reducer, {counter: 0});

export {store};
