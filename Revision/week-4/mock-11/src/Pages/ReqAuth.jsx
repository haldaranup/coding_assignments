import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ReqAuth = ({ children }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  if (!isAuth) {
    return <Navigate to="/admin/login" replace />;
  }
  return children;
};

export default ReqAuth;