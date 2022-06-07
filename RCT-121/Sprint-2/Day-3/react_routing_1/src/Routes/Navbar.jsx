import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <Link to={"/"}>
          Home
        </Link>
      </div>
      <div>
        <Link to={"/products"}>
          All Products
        </Link>
      </div>
    </div>
  );
};
