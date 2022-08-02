import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
} from "../State/App/action";

const AddTodo = () => {
  const [task, setTask] = useState("");

  const dispatch = useDispatch();

  const handleAdd = () => {
    let payload = {
      task: task,
      status: false,
    };
    addTask(payload);
    setTask("");
  };

  const addTask = (payload) => {
    dispatch(addTodoRequest());
    axios
      .post("http://localhost:8080/todos", payload)
      .then((r) => {
        dispatch(addTodoSuccess(r.data));
      })
      .catch((e) => dispatch(addTodoFailure(e)));
  };
  return (
    <div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTodo;
