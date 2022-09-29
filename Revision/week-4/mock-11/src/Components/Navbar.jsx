import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
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
      >
        <p>Login</p>
      </Link>
    </div>
  );
};

export default Navbar;
