import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../Redux/action";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.reducer.todos);

  useEffect(() => {
    dispatch(getTodos);
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
