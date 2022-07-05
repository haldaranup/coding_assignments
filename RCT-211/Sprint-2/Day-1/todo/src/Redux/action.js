import * as types from "./actionTypes";
import axios from "axios";
const getTodoListRequest = () => {
  return {
    type: types.GET_TODO_REQUEST,
  };
};
const getTodoListSuccess = (payload) => {
  return {
    type: types.GET_TODO_SUCCESS,
    payload,
  };
};
const getTodoListFailure = () => {
  return {
    type: types.GET_TODO_FAILURE,
  };
};

const getTodos = payload => (dispatch) => {
  dispatch(getTodoListRequest());
  axios
    .get("/todos")
    .then((r) => dispatch(getTodoListSuccess(r.data)))

    .catch((e) => dispatch(getTodoListFailure(e)));
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
const toggleTodoRequest = () => {
  return {
    type: types.TOGGLE_TODO_REQUEST,
  };
};
const toggleTodoSuccess = (payload) => {
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

const removeTodoRequest = () => {
  return {
    type: types.TOGGLE_TODO_REQUEST,
  };
};
const removeTodoSuccess = (payload) => {
  // console.log(payload)
  return {
    type: types.TOGGLE_TODO_SUCCESS,
    payload,
  };
};
const removeTodoFailure = () => {
  return {
    type: types.TOGGLE_TODO_FAILURE,
  };
};

export {
  getTodoListFailure,
  getTodoListRequest,
  getTodoListSuccess,
  getTodos,
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
  removeTodoRequest,
  removeTodoSuccess,
  removeTodoFailure,
};
