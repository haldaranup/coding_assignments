import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const cart = useSelector(state => state.cart)
  return (
    <div className="nav">
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        Products
      </Link>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        Product Details
      </Link>
      <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
        Cart({cart.length})
      </Link>
      <Link to="/orders" style={{ textDecoration: "none", color: "white" }}>
        Orders
      </Link>
    </div>
  );
};

export default Navbar;
