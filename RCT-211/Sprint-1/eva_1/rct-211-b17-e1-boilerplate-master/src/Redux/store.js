import { reducer } from "./reducer";
import { legacy_createStore as createStore } from "redux";

// TODO: use this store variable to create a store.
export const store = createStore(reducer);

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
