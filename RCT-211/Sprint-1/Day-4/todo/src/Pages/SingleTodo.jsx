import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  removeTodoFailure,
  removeTodoRequest,
  removeTodoSuccess,
  toggleTodoFailure,
  toggleTodoRequest,
  toggleTodoSuccess,
} from "../Redux/action";
import axios from "axios";

const SingleTodo = () => {
  const todos = useSelector((state) => state.reducer.todos);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [currentTodo, setCurrentTodo] = useState({});
  const navigate = useNavigate();

  const toggleStatus = (id, newStatus) => {
    // console.log(currentTodo.id)
    dispatch(toggleTodoRequest());
    axios
      .patch(`/todos/${id}`, { status: newStatus })
      .then((r) => {
        dispatch(toggleTodoSuccess(r.data));
        console.log(r.data);
      })
      .catch((e) => dispatch(toggleTodoFailure(e)));
  };

  const removeTodo = (id) => {
    dispatch(removeTodoRequest());
    axios
      .delete(`/todos/${id}`)
      .then((r) => {
        dispatch(removeTodoSuccess(r.data));
        console.log(r);
        navigate("/");
      })
      .catch((e) => dispatch(removeTodoFailure(e)));
  };

  useEffect(() => {
    let currentTodo = todos.find((i) => i.id === Number(id));
    currentTodo && setCurrentTodo(currentTodo);
  }, [todos, id]);
  return (
    <div>
      <h1>
        {currentTodo?.title} {currentTodo?.status ? "True" : "False"}
      </h1>
      <button onClick={() => toggleStatus(currentTodo.id, !currentTodo.status)}>
        Toggle
      </button>
      <button onClick={() => removeTodo(currentTodo.id)}>Delete</button>
    </div>
  );
};

export default SingleTodo;
