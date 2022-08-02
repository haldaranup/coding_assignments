import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import { reducer as appReducer } from "./App/reducer";
import { reducer as authReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export { store };
