import * as types from "./actionTypes";

const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.GET_TODOS_SUCCESS:
      return {
        ...state,
        todos: payload,
        isLoading: false,
        isError: false,
      };
    case types.GET_TODOS_FAILURE:
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
        let newTodos = [...state.todos, payload]
      return {
        ...state,
        todos: newTodos,
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
