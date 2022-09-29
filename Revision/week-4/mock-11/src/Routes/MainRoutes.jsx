import React from "react";
import { Route, Routes } from "react-router-dom";
import Edit from "../Components/Edit";
import Admin from "../Pages/Admin";
import Home from "../Pages/Home";
import List from "../Pages/List";
import Login from "../Pages/Login";
import Report from "../Pages/Report";
import ReqAuth from "../Pages/ReqAuth";
import Tesla from "../Pages/Tesla";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/edit/:id" element={<Edit />} />

      <Route
        path="/admin/report"
        element={
          <ReqAuth>
            <Report />
          </ReqAuth>
        }
      />
      <Route
        path="/admin/list"
        element={
          <ReqAuth>
            <List />
          </ReqAuth>
        }
      />
      <Route path="/tesla" element={<Tesla />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};

export default MainRoutes;
