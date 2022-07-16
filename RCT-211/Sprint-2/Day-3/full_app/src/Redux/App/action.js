import * as types from "./actionTypes"
import axios from "axios"
const getBooksRequest = () =>{
    return {
        type: types.GET_BOOKS_REQUEST
    }
}
const getBooksSuccess = (payload) =>{
    return {
        type: types.GET_BOOKS_SUCCESS,
        payload
    }
}
const getBooksFailure = () =>{
    return {
        type: types.GET_BOOKS_FAILURE
    }
}

const getBooks = (dispatch) => {
    dispatch(getBooksRequest());
    axios
      .get("/books")
      .then((r) => dispatch(getBooksSuccess(r.data)))
      .catch((e) => dispatch(getBooksFailure(e)));
  };


export {getBooksRequest, getBooksSuccess, getBooksFailure, getBooks}