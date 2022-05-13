import { legacy_createStore } from "redux";
import { reducer } from "./Auth/reducer";

export const store = legacy_createStore(reducer);

store.subscribe(() => {
   console.log("Subscriber:", store.getState());
});
