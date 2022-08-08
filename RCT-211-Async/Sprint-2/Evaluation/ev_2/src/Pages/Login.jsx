import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from "../Redux/AuthReducer/action";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const locationFrom = location.state?.from?.pathname || "/";
  // console.log(locationFrom)
  const navigate = useNavigate();

  const login = (payload) => {
    // console.log(payload);
    dispatch(loginRequest());
    axios
      .post("https://reqres.in/api/login", payload)
      .then((r) => {
        dispatch(loginSuccess(r.data));
        navigate(locationFrom, { replace: true });

      })
      .catch((e) => {
        dispatch(loginFailure(e));
      });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    login(data);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login">
      <h2>LOGIN</h2>
      <form>
        <div>
          <label>User Email</label>
          <br />
          <input
            data-testid="login-email"
            type="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>User Password</label>
          <br />
          <input
            data-testid="login-password"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" data-testid="login-submit" onClick={handleLogin}>
          Loading
        </button>
      </form>
    </div>
  );
};

export default Login;
