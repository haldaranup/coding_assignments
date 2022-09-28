import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../Styles/signup.css";
import { getData, setData } from "../Utils/localStorage";
import "../Styles/nav.css"

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatpassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let isEmail = getData("email");

    if (email == isEmail) {
      alert("User alredy exists!");
    } else {
      if (password != repeatPassword) {
        alert("match");
      } else if (password.length < 6) {
        alert("6");
      } else {
        alert("success");

        setData("email", email);
        setData("password", password);
        navigate("/login");
      }
    }
  };

  return (
    <div className="signup">
      <Link to={"/login"}>
        <button>Login</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="repeatPassword"
          value={repeatPassword}
          required
          onChange={(e) => setRepeatpassword(e.target.value)}
        />
        <input className="signupBtn" type="submit" />
      </form>
    </div>
  );
};

export default Signup;
