import axios from "axios";
import * as types from "./actionTypes";

const getMusicRequest = () => {
  return {
    type: types.GET_MUSIC_REQUEST,
  };
};
const getMusicSuccess = (payload) => {
  return {
    type: types.GET_MUSIC_SUCCESS,
    payload,
  };
};
const getMusicRecords = () => (dispatch) => {
  dispatch(getMusicRequest());
  axios
    .get("http://localhost:8080/albums")
    .then((r) => dispatch(getMusicSuccess(r.data)))
    .catch((e) => dispatch(getMusicFailure(e)));
};

const getMusicFailure = () => {
  return {
    type: types.GET_MUSIC_FAILURE,
  };
};

const editMusicRequest = () => {
  return {
    type: types.EDIT_MUSIC_REQUEST,
  };
};
const editMusicSuccess = (payload) => {
  return {
    type: types.EDIT_MUSIC_SUCCESS,
    payload
  };
};
const editMusicFailure = () => {
  return {
    type: types.EDIT_MUSIC_FAILURE,
  };
};

export {
  getMusicRequest,
  getMusicSuccess,
  getMusicFailure,
  getMusicRecords,
  editMusicRequest,
  editMusicSuccess,
  editMusicFailure,
};
