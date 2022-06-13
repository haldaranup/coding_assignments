
import { userAction } from "./action";
const initState = {
    isLoading: false,
    isAuth: true,
  
  };
  
 export const appReducer = (state = initState, action)=> {

    switch (action.type) {
      case userAction.GET_USERS_REQUEST:
        return {
          ...state,
          isLoading: true,
          isError: false,
        };
      case userAction.GET_USERS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          isError: false,
          date: action.payload,
   
        };
      case userAction.GET_USERS_FAILURE:
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      default:
        return state;
    }
  }
