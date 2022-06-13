import { actionTypes } from "./action";

const initState = {
  isLoading: false,
  isError: false,
  data: [],

};

function reducer(state = initState, action) {
  // write code here
  switch (action.type) {
    case actionTypes.GET_USERS_LIST_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.GET_USERS_LIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        date: action.payload,
 
      };
    case actionTypes.GET_USERS_LIST_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
}

export default reducer;
