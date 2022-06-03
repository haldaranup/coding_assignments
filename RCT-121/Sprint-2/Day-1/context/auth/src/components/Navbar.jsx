import { useContext } from "react";

import React from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Navbar = () => {
  const { isAuth, toggleAuth } = useContext(AuthContext);
  return (
    <nav>
      {isAuth ? (
        <button
          onClick={() => {
            toggleAuth();
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            toggleAuth();
          }}
        >
          Login
        </button>
      )}
    </nav>
  );
};
