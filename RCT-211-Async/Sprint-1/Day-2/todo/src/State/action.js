import * as types from "./actionTypes";

const getTodoRequest = () => {
  return {
    type: types.GET_TODO_REQUEST,
  };
};
const getTodoSuccess = (payload) => {
  return {
    type: types.GET_TODO_SUCCESS,
    payload,
  };
};
const getTodoFailure = () => {
  return {
    type: types.GET_TODO_FAILURE,
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
const deleteTodoRequest = () => {
  return {
    type: types.DELETE_TODO_FAILURE,
  };
};
const deleteTodoSuccess = () => {
  return {
    type: types.DELETE_TODO_FAILURE,
  };
};
const deleteTodoFailure = () => {
  return {
    type: types.DELETE_TODO_FAILURE,
  };
};

export {
  getTodoRequest,
  getTodoSuccess,
  getTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  addTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  deleteTodoFailure
};
