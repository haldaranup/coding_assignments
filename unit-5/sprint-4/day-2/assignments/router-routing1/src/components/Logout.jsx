import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Navigate } from "react-router-dom";

export const Logout = () => {
  // log user out. it's just an inmemory value in context api
  const { toggleAuth } = useContext(AuthContext);
  useEffect(() => {
    toggleAuth();
  }, []);
  return <Navigate to={"/"} />;
};
