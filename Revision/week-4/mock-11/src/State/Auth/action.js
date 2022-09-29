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

export { loginRequest, loginFailure, loginSuccess };
