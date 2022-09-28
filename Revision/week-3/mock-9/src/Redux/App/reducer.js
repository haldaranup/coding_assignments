import * as types from "./actionTypes";

const initialState = {
  restaurant: [],
  cart: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_RESTAURANT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_RESTAURANT_SUCCESS:
      return {
        ...state,
        restaurant: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_RESTAURANT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.ADD_RESTAURANT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.ADD_RESTAURANT_SUCCESS:
      // console.log(payload)
      let newRes = state.restaurant.filter((i) => (payload.includes(i.id)));
      // console.log(newRes);
      return {
        ...state,
        cart: [...newRes],
        isLoading: false,
        isError: false,
      };
    case types.ADD_RESTAURANT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export { reducer };
