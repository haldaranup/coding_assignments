import React, { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addRestaurantSuccess } from "../Redux/App/action";

const RestaurantList = ({ items, cartData }) => {
  const [isClicked, setIsClicked] = useState(false);

  const dispatch = useDispatch();
  const handleClick = (id) => {
    setIsClicked(!isClicked);
    !isClicked ? cartData.push(id) : cartData.splice(cartData.indexOf(id), 1);
    dispatch(addRestaurantSuccess(cartData));
  };
  return (
    <div className="restaurant">
      <p>Name: {items.name}</p>
      <img src={items.image} alt="" width="260px" />
      <p>Type: {items.type}</p>
      <p>Rating: {items.rating}</p>
      <p>Votes: {items.number_of_votes}</p>
      <p>Strats from: {items.price_starts_from}</p>

      <div
        onClick={() => handleClick(items.id)}
        style={{ cursor: "pointer", width: "20px" }}
      >
        {!isClicked ? <BsHeart /> : <BsHeartFill />}
      </div>
    </div>
  );
};

export default RestaurantList;
