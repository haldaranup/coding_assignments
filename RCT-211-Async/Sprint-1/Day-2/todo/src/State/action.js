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
    type: types.DELETE_TODO_REQUEST,
  };
};
const deleteTodoSuccess = () => {
  return {
    type: types.DELETE_TODO_SUCCESS,
  };
};
const deleteTodoFailure = () => {
  return {
    type: types.DELETE_TODO_FAILURE,
  };
};
const toggleTodoRequest = () => {
  return {
    type: types.TOGGLE_TODO_REQUEST,
  };
};
const toggleTodoSuccess = (payload) => {
  console.log(payload);
  return {
    type: types.TOGGLE_TODO_SUCCESS,
    payload,
  };
};
const toggleTodoFailure = () => {
  return {
    type: types.TOGGLE_TODO_FAILURE,
  };
};

const editTodoRequest = () => {
  return {
    type: types.EDIT_TODO_REQUEST,
  };
};
const editTodoSuccess = (payload) => {
  console.log(payload);
  return {
    type: types.EDIT_TODO_SUCCESS,
    payload,
  };
};
const editTodoFailure = () => {
  return {
    type: types.EDIT_TODO_FAILURE,
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
  deleteTodoFailure,
  toggleTodoRequest,
  toggleTodoFailure,
  toggleTodoSuccess,
  editTodoRequest,
  editTodoSuccess,
  editTodoFailure,
};
