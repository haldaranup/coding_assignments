import React from "react";
import { Route, Routes } from "react-router-dom";
import Edit from "../Components/Edit";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import Admin from "../Pages/Admin";
import Home from "../Pages/Home";
import User from "../Pages/User";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/user" element={<User />}></Route>
      <Route path="/edit/:id" element={<Edit />}></Route>
    </Routes>
  );
};

export default MainRoutes;
