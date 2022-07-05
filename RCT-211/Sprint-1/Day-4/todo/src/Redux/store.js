import { combineReducers, legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";

const rootReducer = combineReducers({reducer: reducer})

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
