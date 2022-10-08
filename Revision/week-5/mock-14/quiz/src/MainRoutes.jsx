import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Quiz from "./Pages/Quiz";
import Results from "./Pages/Results";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};

export default MainRoutes;
