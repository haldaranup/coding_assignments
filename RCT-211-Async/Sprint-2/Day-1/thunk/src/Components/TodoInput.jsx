import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  getTodos,
} from "../State/App/action";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const addTodo = (payload) => {
    dispatch(addTodoRequest());
    axios
      .post("http://localhost:8080/todos", payload)
      .then((r) => {
        dispatch(addTodoSuccess(r.data));
        dispatch(getTodos)
      })
      .catch((e) => dispatch(addTodoFailure(e)));
  };

  const handleAdd = () => {
    const data = {
      task: todo,
      status: false,
    };
    addTodo(data);
    setTodo("");
  };
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
