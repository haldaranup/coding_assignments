//Write the ActionCreator functions here
import axios from "axios"
import * as types from "./actionType"

const getWatchesDataRequest = () =>{
    return {
        type: types.GET_WATCHES_DATA_REQUEST
    }
}
const getWatchesDataSuccess = (payload) =>{
    return {
        type: types.GET_WATCHES_DATA_SUCCESS,
        payload
    }

}
const getWatches = () => (dispatch) => {
    dispatch(getWatchesDataRequest());
    axios
      .get("http://localhost:8080/watches")
      .then((r) => {
        dispatch(getWatchesDataSuccess(r.data));
        // console.log(r.data)
      })
      .catch((e) => dispatch(getWatchesDataFailure(e)));
  };

const getWatchesDataFailure = () =>{
    return {
        type: types.GET_WATCHES_DATA_FAILURE
    }
}

export {getWatchesDataRequest, getWatchesDataSuccess, getWatchesDataFailure, getWatches}
