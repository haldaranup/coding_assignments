import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import { reducer } from "./reducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({reducer: reducer})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);
