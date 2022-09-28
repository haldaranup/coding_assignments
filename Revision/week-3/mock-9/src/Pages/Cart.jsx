import React from "react";
import { useSelector } from "react-redux";
import CartList from "../Components/CartList";
import Navbar from "../Components/Navbar";


const Cart = () => {
  const cartData = useSelector((state) => state.app.cart);
  return (
    <>
      <Navbar />
      <h3>Cart</h3>
      <div>
        {cartData?.map((i) => {
          return <CartList items={i} key={i.id} />;
        })}
      </div>
    </>
  );
};

export default Cart;
