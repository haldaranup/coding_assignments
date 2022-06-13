
import { authAction } from "./action";
const initState = {
    isLoading: false,
    isError: false,
    data: [],
  
  };
  
 export const authReducer = (state = initState, action)=> {

    switch (action.type) {
      case actionTypes.ADD_AUTH_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case actionTypes.ADD_AUTH_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          date: action.payload,
   
        };
      case actionTypes.ADD_AUTH_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  }
