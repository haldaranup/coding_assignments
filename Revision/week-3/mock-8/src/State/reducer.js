import * as types from "./actionTypes";
const initialState = {
  hotels: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_HOTELS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_HOTELS_SUCCESS:
      return {
        ...state,
        hotels: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_HOTELS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };



    case types.ADD_HOTEL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.ADD_HOTEL_SUCCESS:
      let newData = [...state.products, payload]
      return {
        ...state,
        products: newData,
        isLoading: true,
        isError: false,
      };
    case types.ADD_HOTEL_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };


    case types.EDIT_HOTEL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.EDIT_HOTEL_SUCCESS:
      let edited = [...state.hotels.map((i) => i.id == payload.id ? payload: i)]
      return {
        ...state,
        products: edited,
        isLoading: true,
        isError: false,
      };
    case types.EDIT_HOTEL_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };


    case types.DELETE_HOTEL_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.DELETE_HOTEL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.DELETE_HOTEL_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};