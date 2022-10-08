import * as types from "./actionTypes";

const initialState = {
  students: [],
  test: [],
  details: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TUITION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_TUITION_SUCCESS:
      return {
        ...state,
        students: payload,

        isLoading: false,
        isError: false,
      };

    case types.GET_TUITION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.POST_TUITION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.POST_TUITION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.POST_TUITION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.DELETE_TUITION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.DELETE_TUITION_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case types.DELETE_TUITION_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.EDIT_TUITION_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.EDIT_TUITION_SUCCESS:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.DETAILS_SUCCESS:
      let detailsData = [...state.students.filter((i) => i.id == payload)];
      return {
        ...state,
        details: detailsData,
        isLoading: true,
        isError: false,
      };
    case types.EDIT_TUITION_FAILURE:
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
