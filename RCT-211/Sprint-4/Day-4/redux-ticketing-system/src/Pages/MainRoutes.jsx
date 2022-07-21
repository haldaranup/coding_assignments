import { Stack } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ReqAuth from "../Components/RequireAuth";
import Sidebar from "../Components/Sidebar";
import HomePage from "./HomePage";
import Login from "./Login";
import SignUp from "./SignUp";

const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ReqAuth>
            <Stack direction='row'>
              <Sidebar />
              <HomePage />
            </Stack>
          </ReqAuth>
        }
      />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default MainRoutes;
