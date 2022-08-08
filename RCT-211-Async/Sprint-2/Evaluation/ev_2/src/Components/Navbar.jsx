import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  const isAuth = useSelector(state => state.auth.isAuth)
  const handleLogin = () =>{
    navigate("/login")
  }
  return (
    <div data-testid="navbar" className="nav">
      <div data-testid="navbar-home-link">
        <img
          src="/watch.png"
          width="60px"
          alt="logo"
          style={{ display: "block" }}
        />
      </div>

      <div>
        {/* Link button to /login page, if the user is not authenticated, else don't show it*/}
        {!isAuth && <button data-testid="navbar-login-button" onClick={handleLogin}>LOGIN</button>}
      </div>
    </div>
  );
};

export default Navbar;
