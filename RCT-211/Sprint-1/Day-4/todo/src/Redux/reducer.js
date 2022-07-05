import { loadData, saveData } from "../Utils/localStorage";
import * as types from "./actionTypes";


const initialState = {
  todos: loadData("todos") || [],
  isLoading: false,
  isError: false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
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
      let newTodo = [...state.todos, payload];
      saveData("todos", newTodo)
      console.log(newTodo)
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
    case types.TOGGLE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.TOGGLE_TODO_SUCCESS:
      let newToggleTodos = state.todos.map((i) => i.id == payload.id ? payload : i)
      console.log(newToggleTodos)
      return {
        ...state,
        todos: newToggleTodos,
        isLoading: false,
        isError: false,
      };
    case types.TOGGLE_TODO_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };


    case types.REMOVE_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case types.REMOVE_TODO_SUCCESS:
      let leftTodos = state.todos.filter((i) => i.id != payload)
      console.log(leftTodos)
      return {
        ...state,
        todos: leftTodos,
        isLoading: false,
        isError: false,
      };
    case types.REMOVE_TODO_FAILURE:
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
