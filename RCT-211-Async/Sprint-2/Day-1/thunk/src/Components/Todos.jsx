import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodos,
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
} from "../State/App/action";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.app.todos);

  useEffect(() => {
    dispatch(getTodos);
  }, []);

  return (
    <div>
      <TodoInput />
      <TodoList items={todos} />
    </div>
  );
};

export default Todos;
