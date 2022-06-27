import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SingleTodo = () => {
  const todos = useSelector((state) => state.todos);
  const { id } = useParams();
  const [currentTodo] = useState(() => {
    return todos.find((i) => i.id === Number(id)) || {};
  });
  return (
    <div>
      <h1>{currentTodo?.title}</h1>
    </div>
  );
};

export default SingleTodo;
