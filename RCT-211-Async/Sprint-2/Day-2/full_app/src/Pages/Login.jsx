import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { loginFailure, loginRequest, loginSuccess } from "../State/Auth/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const locationFrom = location.state?.from?.pathname || "/";
  // console.log(location)
  const navigate = useNavigate();

  const login = (payload) => {
    dispatch(loginRequest());
    axios
      .post("https://reqres.in/api/login", payload)
      .then((r) => {
        dispatch(loginSuccess(r.data));
        navigate(`${locationFrom}`, { replace: true });
      })
      .catch((e) => dispatch(loginFailure(e)));
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
    <div className="loginContainer">
      <div>
        <p>Enter Email</p>
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <p>Enter Password</p>
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
          <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default Login;
