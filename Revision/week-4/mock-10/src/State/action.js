import axios from "axios";
import * as types from "./actionTypes";

const getProductsRequest = () => {
  return {
    type: types.GET_PRODUCTS_REQUEST,
  };
};
const getProductsSuccess = (payload) => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload,
  };
};
const getProducts =
  ({ page = 1, sort = "asc" }) =>
  (dispatch) => {
    dispatch(getProductsRequest());
    axios
      .get(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=38&orderBy=${sort}`
      )
      .then((r) => {
        dispatch(getProductsSuccess(r.data.data));
        // console.log(r.data.data);
      })
      .catch((e) => dispatch(getProductsFailure(e)));
  };

const getProductsFailure = () => {
  return {
    type: types.GET_PRODUCTS_FAILURE,
  };
};
const addToCart = (data) => (dispatch) => {
  dispatch({
    type: types.ADD_TO_CART,
    payload: data,
  });
};

export {
  getProductsRequest,
  getProductsSuccess,
  getProductsFailure,
  getProducts,
  addToCart,
};
