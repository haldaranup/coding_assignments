import { useContext, useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
  const navigate = useNavigate();
  const { IsAuth, toggleAuth, token } = useContext(AuthContext);
  //  use reqres to log user in.
  const [Form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    // console.log(e.target.value);
    setForm({
      ...Form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleAuth(Form);
  };

  return (
    <form className="loginform" onSubmit={handleSubmit}>
      <input onChange={handleChange} name="username" type="text" placeholder="Enter username" className="login_username" />
      <input onChange={handleChange} name="password" type="text" placeholder="Enter password" className="login_password" />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
