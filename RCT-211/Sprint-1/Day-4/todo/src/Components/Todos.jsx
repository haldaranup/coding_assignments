import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodoListFailure,
  getTodoListRequest,
  getTodoListSuccess,
} from "../Redux/action";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.reducer.todos);

  const getTodos = () => {
    dispatch(getTodoListRequest());
    axios
      .get("/todos")
      .then((r) => dispatch(getTodoListSuccess(r.data)))

      .catch((e) => dispatch(getTodoListFailure(e)));
  };

  useEffect(() => {
    getTodos();
  }, []);
  console.log(todos);
  return (
    <div>
      <AddTodo getTodos={getTodos} />
      <TodoList todoList={todos} />
    </div>
  );
};

export default Todos;
