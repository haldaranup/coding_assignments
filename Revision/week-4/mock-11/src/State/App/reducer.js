import * as types from "./actionTypes";

const initialState = {
  tesla: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TESLA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_TESLA_SUCCESS:
      return {
        ...state,
        tesla: payload,
        isLoading: false,
        isError: false,
      };



    case types.GET_TESLA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.POST_TESLA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.POST_TESLA_SUCCESS:
      let newData = [...state.tesla, payload];
      return {
        ...state,
        tesla: newData,
        isLoading: false,
        isError: false,
      };
    case types.POST_TESLA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

      case types.DELETE_TESLA_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.DELETE_TESLA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.DELETE_TESLA_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };


      case types.EDIT_EDIT_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.EDIT_EDIT_SUCCESS:
      let edited = [...state.tesla.map((i) => i.id == payload.id ? payload: i)]
      return {
        ...state,
        tesla: edited,
        isLoading: true,
        isError: false,
      };
    case types.EDIT_EDIT_FAILURE:
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
