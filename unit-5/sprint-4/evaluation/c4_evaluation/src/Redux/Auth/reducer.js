import { LOGIN_TOGGLE } from "./actions";

const init = {
   username: "",
   isLoggedin: false,
};

export const reducer = (store = init, { type, payload }) => {
   switch (type) {
      case LOGIN_TOGGLE:
         return {
            ...store,
            username: payload.username,
            isLoggedin: payload.isLoggedin,
         };
      default:
         return store;
   }
};
