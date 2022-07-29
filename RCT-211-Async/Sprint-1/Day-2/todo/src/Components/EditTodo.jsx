import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const EditTodo = () => {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos);
//   const currentTodo = todos.find((i) => i.id === Number(id));
  console.log(todos);


  return <div>{/* {currentTodo} */}</div>;
};

export default EditTodo;
