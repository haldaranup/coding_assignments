import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

const Navbar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  return (
    <div className="navbar">
      <nav>
        <Link to={"/restaurant"} style={{ textDecoration: "none" }}>
          <span>Restaurant</span>
        </Link>

        {isAuth ? (
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <span>Cart</span>
          </Link>
        ) : (
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <span>Login</span>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
