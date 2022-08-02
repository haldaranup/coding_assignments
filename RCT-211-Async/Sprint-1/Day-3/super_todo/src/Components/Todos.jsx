import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTodosFailure,
  getTodosRequest,
  getTodosSuccess,
} from "../State/App/action";
import AddTodo from "./AddTodo";
import Login from "./Login";
import TodoList from "./TodoList";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.app.todos);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const getTodos = () => {
    dispatch(getTodosRequest());
    axios
      .get("http://localhost:8080/todos")
      .then((r) => dispatch(getTodosSuccess(r.data)))
      .catch((e) => dispatch(getTodosFailure(e)));
  };
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      {isAuth ? (
        <div>
          <AddTodo />
          {todos.map((i) => {
            return <TodoList todos={i} key={i.id} />;
          })}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default Todos;
