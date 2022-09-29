import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: ""
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        isError: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        token: payload,
        isAuth: true,
        isLoading: true,
        isError: false,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isAuth: false,
        isLoading: true,
        isError: false,
      };

    default:
      return state;
  }
};

export { reducer };
