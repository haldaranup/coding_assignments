import * as types from "./actionTypes";
const initialState = {
  profileData: [],
  isLoading: false,
  isError: false,
};

const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PROFILE_DETAILS_REQUEST:
      return {
        isLoading: true,
        isError: false,
      };
    case types.GET_PROFILE_DETAILS_SUCCESS:
      return {
        profileData: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_PROFILE_DETAILS_FAILURE:
      return {
        isLoading: false,
        isError: true,
      };
    default:
      return oldState;
  }
};

export { reducer };
