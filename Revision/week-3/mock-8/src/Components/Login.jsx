import React, { useState } from "react";
import { getData } from "../Utils/localStorage";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/nav.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    let isEmail = getData("email");
    let isPassword = getData("password");

    if(email == "admin@gmail.com" && password == "masai") {
        alert("Success, redirecting to admin page")
        navigate("/admin")
    } else if (email == isEmail && password == isPassword){
        alert("Success, redirecting to hotel page")
        navigate("/user")
    } else alert("Wrong CredentialS!")
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input className="signupBtn" type="submit" />
      </form>
    </div>
  );
};

export default Login;
