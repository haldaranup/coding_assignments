import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
} from "../State/action";

const TodoList = ({ todoList, getTodos }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTodoRequest());
    axios
      .delete(`/todos/${id}`)
      .then(() => {
        getTodos();
        dispatch(deleteTodoSuccess());
      })
      .catch((e) => dispatch(deleteTodoFailure(e)));
  };
  return (
    <div>
      {todoList.map((i) => {
        return (
          <div key={i.id} className="list">
            <h4>{i.task}</h4>
            <div>
              <Link to={`/todos/${i.id}/edit`}>
                <button className="btn yellow">Edit</button>
              </Link>
              <button className="btn red" onClick={() => handleDelete(i.id)}>
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
