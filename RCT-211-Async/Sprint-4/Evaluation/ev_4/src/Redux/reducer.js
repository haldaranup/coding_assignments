import * as types from "./actionTypes";
const initialState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
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



    case types.ADD_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.ADD_PRODUCT_SUCCESS:
      let newData = [...state.products, payload]
      return {
        ...state,
        products: newData,
        isLoading: true,
        isError: false,
      };
    case types.ADD_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };


    case types.EDIT_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.EDIT_PRODUCT_SUCCESS:
      let edited = [...state.products.map((i) => i.id == payload.id ? payload: i)]
      return {
        ...state,
        products: edited,
        isLoading: true,
        isError: false,
      };
    case types.EDIT_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };


    case types.DELETE_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.DELETE_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
