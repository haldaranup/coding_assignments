import * as types from "./actionTypes";

const getTodosRequest = () => {
  return {
    type: types.GET_TODOS_REQUEST,
  };
};
const getTodosSuccess = (payload) => {
  return {
    type: types.GET_TODOS_SUCCESS,
    payload,
  };
};
const getTodosFailure = () => {
  return {
    type: types.GET_TODOS_FAILURE,
  };
};

const addTodoRequest = () => {
  return {
    type: types.ADD_TODO_REQUEST,
  };
};
const addTodoSuccess = (payload) => {
  return {
    type: types.ADD_TODO_SUCCESS,
    payload,
  };
};
const addTodoFailure = () => {
  return {
    type: types.ADD_TODO_FAILURE,
  };
};

export {
  getTodosRequest,
  getTodosSuccess,
  getTodosFailure,
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
};
