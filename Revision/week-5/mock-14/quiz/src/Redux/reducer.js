import * as types from "./actionTypes";

const iniialState = {
  isLoading: false,
  quiz: [],
  user: "",
  isError: false,
  score: {},
  info: {}
};

const reducer = (state = iniialState, { type, payload }) => {
  console.log("data",payload)
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...state,
        quiz: payload.data,
        info: payload.info,
        isLoading: false,
        isError: false,
      };
    case types.GET_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.CORRECT_ANS:
      return {
        ...state,
        score: payload,

      };
    case types.USER_NAME:
      return {
        ...state,
        user: payload,

      };

    default:
      return state;
  }
};

export default reducer;
