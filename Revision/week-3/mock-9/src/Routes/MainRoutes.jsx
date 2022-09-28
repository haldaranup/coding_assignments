import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import ReqAuth from "../Pages/ReqAuth";
import Restaurant from "../Pages/Restaurant";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route
        path="/restaurant"
        element={
          <ReqAuth>
            <Restaurant />
          </ReqAuth>
        }
      />
    </Routes>
  );
};
