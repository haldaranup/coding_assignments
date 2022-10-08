import * as types from "./actionTypes";

const initialState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  name: "",
  info: []
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
        name: payload,
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
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        info: [...state.info, payload],
        isLoading: false,
        isError: false,

      };


    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        isLoading: false,
        isError: false,
      };

    default:
      return state;
  }
};

export { reducer };
