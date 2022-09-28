
import * as types from "./actionTypes";

const getRestaurantRequest = () => {
  return {
    type: types.GET_RESTAURANT_REQUEST,
  };
};
const getRestaurantSuccess = (payload) => {
  return {
    type: types.GET_RESTAURANT_SUCCESS,
    payload,
  };
};

const getRestaurantFailure = () => {
  return {
    type: types.GET_RESTAURANT_FAILURE,
  };
};

const addRestaurantRequest = () => {
  return {
    type: types.ADD_RESTAURANT_REQUEST,
  };
};
const addRestaurantSuccess = (payload) => {
  return {
    type: types.ADD_RESTAURANT_SUCCESS,
    payload,
  };
};
const addRestaurantFailure = () => {
  return {
    type: types.ADD_RESTAURANT_FAILURE,
  };
};

export {
  getRestaurantRequest,
  getRestaurantSuccess,
  getRestaurantFailure,
  addRestaurantRequest,
  addRestaurantSuccess,
  addRestaurantFailure,
};
