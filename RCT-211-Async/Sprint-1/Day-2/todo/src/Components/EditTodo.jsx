import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editTodoFailure,
  editTodoRequest,
  editTodoSuccess,
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
} from "../State/action";

const EditTodo = () => {
  const [currentTodo, setCurrentTodo] = useState({});
  const [edit, setEdit] = useState("");

  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const getTodos = () => {
    dispatch(getTodoRequest());
    axios
      .get("/todos")
      .then((r) => {
        dispatch(getTodoSuccess(r.data));
        let pres = r.data.find((i) => i.id == id);
        setCurrentTodo(pres);
      })
      .catch((e) => dispatch(getTodoFailure(e)));
  };
  const editTodo = (payload) => {
    dispatch(editTodoRequest());
    axios
      .patch(`/todos/${id}`, payload)
      .then((r) => {
        dispatch(editTodoSuccess(r.data));
        alert(`Are you sure you want to edit your task "${currentTodo.task}" to "${payload.task}"`)
        navigate("/")
      })
      .catch((e) => dispatch(editTodoFailure(e)));
  };
  const handleEdit = () =>{
    const payload = {task: edit}
    editTodo(payload)
    setEdit("")
    getTodos()
  }

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h2>Current task: {currentTodo.task}</h2>
      <input
        type="text"
        value={edit}
        onChange={(e) => setEdit(e.target.value)}
      />
      <button className="btn yellow" onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default EditTodo;
