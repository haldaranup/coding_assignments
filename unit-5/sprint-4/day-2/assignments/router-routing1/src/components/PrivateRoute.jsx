import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { IsAuth } = useContext(AuthContext);

  if (!IsAuth) {
    return <Navigate to={"/login"} replace={true} />;
  }
  return children;
};
