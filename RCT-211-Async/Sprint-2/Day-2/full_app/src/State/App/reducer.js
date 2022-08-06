import * as types from "./actionTypes";

const initialState = {
  music: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_MUSIC_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_MUSIC_SUCCESS:
      return {
        ...state,
        music: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_MUSIC_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case types.EDIT_MUSIC_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.EDIT_MUSIC_SUCCESS:
      let newMusic = state.music.map((i) => (i.id == payload.id ? payload : i));
      console.log(newMusic);
      return {
        ...state,
        music: newMusic,
        isLoading: false,
        isError: false,
      };
    case types.EDIT_MUSIC_FAILURE:
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
