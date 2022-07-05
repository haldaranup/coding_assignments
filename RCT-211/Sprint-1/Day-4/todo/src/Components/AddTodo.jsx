import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
} from "../Redux/action";

const AddTodo = ({ getTodos }) => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addTodo = (payload) => {
    dispatch(addTodoRequest());
    axios
      .post("/todos", payload)
      .then((r) => dispatch(addTodoSuccess(r.data)))

      .catch((e) => dispatch(addTodoFailure(e)));
  };
  const handleAdd = () => {
    if (todo) {
      const payload = { title: todo, status: false };
      addTodo(payload);
      setTodo("");
      getTodos();
    }
  };
  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
};

export default AddTodo;
