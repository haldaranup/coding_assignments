import * as types from "./actionTypes";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TODO_REQUEST:
      return {
        ...state,
      };
    case types.GET_TODO_SUCCESS:
      return {
        ...state,
        todos: payload,
      };
    case types.GET_TODO_FAILURE:
      return {
        ...state,
      };
    case types.ADD_TODO_REQUEST:
      return {
        ...state,
      };
    case types.ADD_TODO_SUCCESS:
      let newtodos = [...state.todos, payload];
      return {
        ...state,
        todos: newtodos,
      };
    case types.ADD_TODO_FAILURE:
      return {
        ...state,
      };
    case types.DELETE_TODO_REQUEST:
      return {
        ...state,
      };
    case types.DELETE_TODO_SUCCESS:
      return {
        ...state,
        todos: payload,
      };
    case types.DELETE_TODO_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export { reducer };
