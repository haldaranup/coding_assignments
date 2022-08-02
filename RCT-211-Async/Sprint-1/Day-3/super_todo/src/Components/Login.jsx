import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFailure, loginRequest, loginSuccess } from "../State/Auth/action";

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (data) => {
    dispatch(loginRequest());
    axios
      .post("https://reqres.in/api/login", data)
      .then((r) => {
        dispatch(loginSuccess(r.data));
      })
      .catch((e) => {
        dispatch(loginFailure(e));
        alert("invalid credentials");
      });
  };
  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    login(data);
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
