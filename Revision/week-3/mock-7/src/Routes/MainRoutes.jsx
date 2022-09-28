import React from "react";
import { Route, Routes } from "react-router-dom";
import Countries from "../Components/Countries";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Countries />}></Route>
      <Route
        path="*"
        element={
          <div>
            <h1>Its 404 buddy!</h1>
            <p>Go to homepage to see all the countries</p>
          </div>
        }
      ></Route>
    </Routes>
  );
};

export default MainRoutes;
