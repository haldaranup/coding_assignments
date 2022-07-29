import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
} from "../State/action";

const AddTodo = ({ getTodos }) => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const addTodo = (payload) => {
    dispatch(addTodoRequest());
    axios
      .post("/todos", payload)
      .then((r) => {
        dispatch(addTodoSuccess(r.data));
        console.log(r.data);
      })
      .catch((e) => {
        dispatch(addTodoFailure(e));
      });
  };

  const handleAdd = () => {
    const payload = { task: task };
    addTodo(payload);
    setTask("");
    getTodos();
  };

  return (
    <div className="addBtnDiv">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="btn blue" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default AddTodo;
