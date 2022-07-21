import { getData, saveData } from "../../Utils/localStorage";
import * as types from "./actionTypes"

const initialState = {
  isAuth: getData("token") ? true: false,
  token: getData("token") || "",
  isLoading: false,
  isError: false
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.REGISTER_REQUEST:{
      return {
        ...state, 
        isLoading: true,
        isError: false
      }
    }
    case types.REGISTER_SUCCESS:{
      return {
        ...state,
        isLoading: false,
        isError: false
      }
    }
    case types.REGISTER_REQUEST:{
      return {
        ...state,
        isLoading: false,
        isError: true
      }
    }


    case types.LOGIN_REQUEST:{
      return {
        ...state, 
        isLoading: true,
        isError: false
      }
    }
    case types.LOGIN_SUCCESS:{
      saveData("token", payload)
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false,
        isError: false
      }
    }
    case types.LOGIN_REQUEST:{
      return {
        ...state,
        isAuth: false,
        token: "",
        isLoading: false,
        isError: true
      }
    }
    default:
      return state;
  }
};
export {reducer};
