import axios from "axios";
import * as types from "./actionTypes";
const getDataRequest = () => {
  return {
    type: types.GET_DATA_REQUEST,
  };
};
const getDataSuccess = (payload) => {
  console.log('payload:', payload)
  return {
    type: types.GET_DATA_SUCCESS,
    payload,
  };
};

const getData =
  ({ number, category, level, type }) =>
  (dispatch) => {
    dispatch(getDataRequest());
    axios
      .get(
        `https://opentdb.com/api.php?amount=${number}&category=${category}&difficulty=${level}&type=${type}`
      )
      .then((r) => {
        dispatch(
          getDataSuccess({
            data: r.data.results,
            info: { number, category, level, type },
          })
        );
      })
      .catch((e) => dispatch(getDataFailure(e)));
  };

const getDataFailure = () => {
  return {
    type: types.GET_DATA_FAILURE,
  };
};

const userName = (payload) => {
  return {
    type: types.USER_NAME,
    payload,
  };
};
const correctAns = (payload) => {
  return {
    type: types.CORRECT_ANS,
    payload,
  };
};

export {
  getDataSuccess,
  getDataFailure,
  getDataRequest,
  getData,
  correctAns,
  userName,
};
