import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [IsAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState(null);

  const toggleAuth = (data) => {
    // if user is logged in
    if (IsAuth) {
      setToken(null);
      setIsAuth(false);
      return;
    }

    // if user is not logged in
    fetch("https://reqres.in/api/login", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data.token);
        setIsAuth(true);
        console.log("Success:", data.token);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return <AuthContext.Provider value={{ IsAuth, toggleAuth, token }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
