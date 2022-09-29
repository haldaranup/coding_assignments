import axios from "axios";
import * as types from "./actionTypes";
const getTeslaRequest = () => {
  return {
    type: types.GET_TESLA_REQUEST,
  };
};
const getTeslaSuccess = (payload) => {
  return {
    type: types.GET_TESLA_SUCCESS,
    payload,
  };
};
const getTesla = () => (dispatch) => {
  dispatch(getTeslaRequest());
  axios
    .get(`https://haldaranup.herokuapp.com/teslaIndia`)
    .then((r) => {
      dispatch(getTeslaSuccess(r.data));
    })
    .catch((e) => dispatch(getTeslaFailure(e)));
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

const deleteTeslaRequest = () => {
  return {
    type: types.DELETE_TESLA_REQUEST,
  };
};
const deleteTeslaSuccess = (payload) => {
  return {
    type: types.DELETE_TESLA_SUCCESS,
    payload,
  };
};
const deleteTeslaFailure = () => {
  return {
    type: types.DELETE_TESLA_FAILURE,
  };
};

const editTeslaRequest = () => {
  return {
    type: types.EDIT_TESLA_REQUEST,
  };
};
const editTeslaSuccess = (payload) => {
  return {
    type: types.EDIT_TESLA_SUCCESS,
    payload,
  };
};
const editTeslaFailure = () => {
  return {
    type: types.EDIT_TESLA_FAILURE,
  };
};

export {
  getTeslaFailure,
  getTeslaRequest,
  getTeslaSuccess,
  postTeslaFailure,
  postTeslaRequest,
  postTeslaSuccess,
  deleteTeslaFailure,
  deleteTeslaRequest,
  deleteTeslaSuccess,
  editTeslaFailure,
  editTeslaRequest,
  editTeslaSuccess,
  getTesla,
};
