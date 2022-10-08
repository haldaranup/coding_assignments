import axios from "axios";
import * as types from "./actionTypes";
const getTuitionRequest = () => {
  return {
    type: types.GET_TUITION_REQUEST,
  };
};
const getTuitionSuccess = (payload) => {
  return {
    type: types.GET_TUITION_SUCCESS,
    payload,
  };
};
const getTuition = () => (dispatch) => {
  dispatch(getTuitionRequest());
  axios
    .get(`https://haldaranup.herokuapp.com/tuitionRecords`)
    .then((r) => {
      dispatch(getTuitionSuccess(r.data[0].students))
      
    })
    .catch((e) => dispatch(getTuitionFailure(e)));
};

const getTuitionFailure = () => {
  return {
    type: types.GET_TUITION_FAILURE,
  };
};

const postTuitionRequest = () => {
  return {
    type: types.POST_TUITION_REQUEST,
  };
};
const postTuitionSuccess = () => {
  return {
    type: types.POST_TUITION_SUCCESS,
  };
};
const postTuitionFailure = () => {
  return {
    type: types.POST_TUITION_FAILURE,
  };
};

const deleteTuitionRequest = () => {
  return {
    type: types.DELETE_TUITION_REQUEST,
  };
};
const deleteTuitionSuccess = (payload) => {
  return {
    type: types.DELETE_TUITION_SUCCESS,
    payload,
  };
};
const deleteTuitionFailure = () => {
  return {
    type: types.DELETE_TUITION_FAILURE,
  };
};

const editTuitionRequest = () => {
  return {
    type: types.EDIT_TUITION_REQUEST,
  };
};
const editTuitionSuccess = (payload) => {
  return {
    type: types.EDIT_TUITION_SUCCESS,
    payload,
  };
};
const editTuitionFailure = () => {
  return {
    type: types.EDIT_TUITION_FAILURE,
  };
};
const detailsSuccess = (payload) => {
  return {
    type: types.DETAILS_SUCCESS,
    payload
  };
};

export {
  getTuitionFailure,
  getTuitionRequest,
  getTuitionSuccess,
  postTuitionFailure,
  postTuitionRequest,
  postTuitionSuccess,
  deleteTuitionFailure,
  deleteTuitionRequest,
  deleteTuitionSuccess,
  editTuitionFailure,
  editTuitionRequest,
  editTuitionSuccess,
  detailsSuccess,
  getTuition,
};
