import React from "react";
import { Route, Routes } from "react-router-dom";
import EditTodo from "../Components/EditTodo";
import Todos from "../Components/Todos";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Todos />} />
      <Route path="/todos/:id/edit" element={<EditTodo />} />
    </Routes>
  );
};

export default Pages;
