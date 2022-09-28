import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Orders from "../Pages/Orders";
import SingleProduct from "../Pages/SingleProduct";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<SingleProduct />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="*" element={<h3>Page Not Found</h3>} />
    </Routes>
  );
};

export default MainRoutes;
