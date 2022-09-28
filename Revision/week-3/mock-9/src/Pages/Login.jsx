import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Stack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { loginFailure, loginRequest, loginSuccess } from "../Redux/Auth/action";
import "../Styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = (payload) => {
    dispatch(loginRequest());
    axios
      .post("https://reqres.in/api/login", payload)
      .then((r) => {
        dispatch(loginSuccess(r.data));
        alert("Success");
        navigate(`/restaurant`);
      })
      .catch((e) => {
        dispatch(loginFailure(e));
        alert("Something went wrong!");
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
    <>
      <Navbar />
      <div className="loginContainer">
        <div>
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
