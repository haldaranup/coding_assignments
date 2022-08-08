//Write the ActionCreator functions here
import * as types from "./actionTypes"

const loginRequest = () =>{
    return {
        type: types.LOGIN_REQUEST,
    }
}
const loginSuccess = (payload) =>{
    return {
        type: types.LOGIN_SUCCESS,
        payload
    }
}
const loginFailure = () =>{
    return {
        type: types.LOGIN_FAILURE,

    }
}

export {loginRequest, loginSuccess, loginFailure}