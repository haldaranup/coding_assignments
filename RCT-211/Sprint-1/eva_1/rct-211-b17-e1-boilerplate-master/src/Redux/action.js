//Create ActionCreator functions here
import * as types from "./actionTypes";

export const getShoesRequest = () => {
  return {
    type: types.GET_SHOES_REQUEST,
  };
};
export const getShoesSuccess = (payload) => {
  return {
    type: types.GET_SHOES_SUCCESS,
    payload,
  };
};
export const getShoesFailure = () => {
  return {
    type: types.GET_SHOES_FAILURE,
  };
};
