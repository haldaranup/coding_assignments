import * as types from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  cart: []
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_PRODUCTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...payload],
        isLoading: false,
        isError: true,
      };

    

    default:
      return state;
  }
};

export { reducer };
