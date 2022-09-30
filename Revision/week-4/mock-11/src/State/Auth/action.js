import * as types from "./actionTypes";

const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};
const loginSuccess = () => {
  return {
    type: types.LOGIN_SUCCESS,
  };
};
const loginFailure = () => {
  return {
    type: types.LOGIN_FAILURE,
  };


};

const logoutSuccess = () => {
  return {
    type: types.LOGOUT_SUCCESS,
  };
};
export { loginRequest, loginFailure, loginSuccess, logoutSuccess };
