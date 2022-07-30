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
    case types.TOGGLE_TODO_REQUEST:
      return {
        ...state,
      };
    case types.TOGGLE_TODO_SUCCESS:
        let toggledTodo = state.todos.map((i) => i.id === payload.id ? payload: i)
        // console.log(toggledTodo)
      return {
        ...state,
        todos: toggledTodo,
      };
    case types.TOGGLE_TODO_FAILURE:
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
      };
    case types.DELETE_TODO_FAILURE:
      return {
        ...state,
      };

    case types.EDIT_TODO_REQUEST:
      return {
        ...state,
      };
    case types.EDIT_TODO_SUCCESS:
      let editTodo = state.todos.map((i) => i.id === payload.id ? payload: i)
      return {
        ...state,
        todos: editTodo,
      };
    case types.EDIT_TODO_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export { reducer };
