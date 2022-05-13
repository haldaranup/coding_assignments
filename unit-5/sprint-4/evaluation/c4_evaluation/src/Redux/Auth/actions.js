// action types
export const LOGIN_TOGGLE = "LOGIN_TOGGLE";
// Action Creators

export const login = (data) => {
   return {
      type: LOGIN_TOGGLE,
      payload: data,
   };
};
