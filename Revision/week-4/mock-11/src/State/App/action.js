
import * as types from "./actionTypes"
const getTeslaRequest = () => {
    return {
      type: types.GET_TESLA_REQUEST,
    };
  };
const getTeslaSuccess = () => {
    return {
      type: types.GET_TESLA_SUCCESS,
    };
  };
const getTeslaFailure = () => {
    return {
      type: types.GET_TESLA_FAILURE,
    };
  };



const postTeslaRequest = () => {
    return {
      type: types.POST_TESLA_REQUEST,
    };
  };
const postTeslaSuccess = () => {
    return {
      type: types.POST_TESLA_SUCCESS,
    };
  };
const postTeslaFailure = () => {
    return {
      type: types.POST_TESLA_FAILURE,
    };
  };


  export {
    getTeslaFailure,
    getTeslaRequest,
    getTeslaSuccess,
    postTeslaFailure,
    postTeslaRequest,
    postTeslaSuccess
  }