import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import { appReducer } from "./App/reducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({app: appReducer})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

