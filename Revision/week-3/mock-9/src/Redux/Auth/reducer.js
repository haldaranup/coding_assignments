import * as types from "./actionTypes";

import { loadData, saveData } from "../../Utils/localStorage";
const initialState = {
  isAuth: loadData("isAuth") || false,
  isAuthLoading: false,
  token: loadData("token") || "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...state,
        isAuth: false,
        isAuthLoading: true,
        token: "",
      };
    case types.USER_LOGIN_SUCCESS:
      saveData("token", payload.token);
      saveData("isAuth", true);
      // console.log(payload.token);
      return {
        ...state,
        isAuth: true,
        token: payload,
      };
    case types.USER_LOGIN_FAILURE:
      return {
        isAuth: false,
        isAuthLoading: false,
        token: "",
      };

    default:
      return state;
  }
};

export { reducer };
