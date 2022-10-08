import * as types from "./actionTypes";

const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};
const loginSuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload
  };
};
const loginFailure = () => {
  return {
    type: types.LOGIN_FAILURE,
  };


};
const signupSuccess = (payload) => {
  return {
    type: types.SIGNUP_SUCCESS,
    payload
  };


};

const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};
export { loginRequest, loginFailure, loginSuccess, logoutSuccess, signupSuccess};
