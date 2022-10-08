import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Details from "../Pages/Details";
import ReqAuth from "../Pages/ReqAuth";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReqAuth>
            <Home />
          </ReqAuth>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/details"
        element={
          <ReqAuth>
            <Details />
          </ReqAuth>
        }
      />
    </Routes>
  );
};

export default MainRoutes;
