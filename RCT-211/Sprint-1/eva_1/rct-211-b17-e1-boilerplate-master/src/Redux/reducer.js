import * as types from "./actionTypes"
const initialState = {
  shoes: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, store) => {
  const {type, payload} = store;
  switch (type){
    case types.GET_SHOES_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_SHOES_SUCCESS:
      return {
        ...state,
        shoes: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_SHOES_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      default:
  return state;
  }
  
};
