import * as types from "./actionTypes";

const initialState = {
  todo: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, store) => {
  const { type, payload } = store;
  switch (type) {
    case types.GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_TODO_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case types.ADD_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.ADD_TODO_SUCCESS:
      let newTodo = [...state.todo, payload];
      return {
        ...state,
        todos: newTodo,
        isLoading: false,
        isError: false,
      };
    case types.ADD_TODO_FAILURE:
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
