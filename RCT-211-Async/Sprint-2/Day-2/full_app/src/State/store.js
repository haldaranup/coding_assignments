import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as appReducer } from "./App/reducer";
import { reducer as authReducer } from "./Auth/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
