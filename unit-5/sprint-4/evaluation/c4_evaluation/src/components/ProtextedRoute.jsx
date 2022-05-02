// /orders and /neworder are protected routes

import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
   const loginStatus = useSelector((store) => store.isLoggedin);

   if (!loginStatus) {
      return <Navigate to="/login" replace={false} />;
   }

   return children;
};
