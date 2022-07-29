import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
} from "../State/action";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const getTodos = () => {
    dispatch(getTodoRequest());
    axios
      .get("/todos")
      .then((r) => {
        dispatch(getTodoSuccess(r.data));
        console.log(r.data);
      })
      .catch((e) => dispatch(getTodoFailure(e)));
  };

  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);

  return (
    <div>
      <TodoList todoList={todos} getTodos={getTodos}/>
      <AddTodo getTodos={getTodos} />
    </div>
  );
};

export default Todos;
