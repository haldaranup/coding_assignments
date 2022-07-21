import * as types from "./actionTypes";
const initialState = {
  countries: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_COUNTRIES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_COUNTRIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
