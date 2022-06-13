import { combineReducer, createStore } from "react"
import { appReducer } from "./app/reducer"
import {authReducer} from "./auth/reducer"
import {thunk} from "redux-thunk"

const rootReducer = combineReducer ({
    app: appReducer,
    auth: authReducer
})

export const store = createStore(
    rootReducer,
    applyMiddleWare(thunk)
)
