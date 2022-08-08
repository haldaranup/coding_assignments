// NOTE: DO NOT MODIFY the intial state structure in this file.
import * as types from "./actionTypes";
const initialState = {
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        token: "",
        isError: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
        isError: false,
        isLoading: false,
      };
    case types.LOGIN_FAILURE:
      return {
        isAuth: false,
        isLoading: false,
        token: "",
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
