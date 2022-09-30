import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutSuccess } from "../State/Auth/action";

const Navbar = () => {
  const isAuth = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutSuccess())
  }
  return (
    <div className="nav">
      <Link to="/admin/list" style={{ textDecoration: "none", color: "white" }}>
        <p>List</p>
      </Link>
      <Link
        to="/admin/report"
        style={{ textDecoration: "none", color: "white" }}
      >
        <p>Report</p>
      </Link>
      <Link
        to="/admin/login"
        style={{ textDecoration: "none", color: "white" }}
        onClick={handleLogout}
      >
        <p>{isAuth ? "Logout": "Login"}</p>
      </Link>
    </div>
  );
};

export default Navbar;
