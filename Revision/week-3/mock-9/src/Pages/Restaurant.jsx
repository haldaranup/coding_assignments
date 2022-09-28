import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import RestaurantList from "../Components/RestaurantList";
import {
  getRestaurantFailure,
  getRestaurantRequest,
  getRestaurantSuccess,
} from "../Redux/App/action";
import { loadData } from "../Utils/localStorage";

const Restaurant = () => {
  const [priceSort, setPriceSort] = useState("asc");
  const [filter, setFilter] = useState("ethnic");

  const token = useSelector((state) => state.auth.token);
  const restaurant = useSelector((state) => state.app.restaurant);
  //   console.log("restaurants:", restaurant);
  const dispatch = useDispatch();

  let resUrl = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants?page=1&limit=20&sort=price_starts_from&order=${priceSort}&filter=${filter}`;


  let cartData = []
  console.log('cartData:', cartData)

  const getRestaurants = () => {
    dispatch(getRestaurantRequest());
    axios
      .get(resUrl)
      .then((r) => {
        dispatch(getRestaurantSuccess(r.data.data));
        console.log(r.data.data);
      })
      .catch((e) => {
        dispatch(getRestaurantFailure(e));
      });
  };

  const handlePriceSort = (e) => {
    setPriceSort(e.target.value);
    getRestaurants();
  };
  const handleFilter = (e) => {
    setFilter(e.target.value);
    getRestaurants();
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <Navbar />
      <p>User Token: {token.token || loadData("token")}</p>
      <div className="resContainer">
        <div className="filterSort">
          <select onChange={handlePriceSort}>
            <option value="">Sort by Rating</option>
            <option value="asc">High to low</option>
            <option value="desc">Low to high</option>
          </select>
          <select onChange={handleFilter}>
            <option value="">Filter by Type</option>
            <option value="ethnic">Ethnic</option>
            <option value="fast_food">fast_food</option>
            <option value="fine_dining">fine_dining</option>
            <option value="cafe">cafe</option>
            <option value="asual_dining">asual_dining</option>
          </select>
        </div>

        <div className="resList">
          {restaurant?.map((i) => {
            return <RestaurantList items={i} key={i.id} cartData={cartData} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Restaurant;
