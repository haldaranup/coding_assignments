import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getHotelsFailure,
  getHotelsRequest,
  getHotelsSuccess,
} from "../State/action";
import HotelsLists from "../Components/HotelsLists";
import Hotels from "../Components/Hotels";
const User = () => {
  const hotels = useSelector((state) => state.hotels);
  console.log("hotels:", hotels);

  let hotelsUrl = "https://haldaranup.herokuapp.com/hotels";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getHotels = () => {
    dispatch(getHotelsRequest());

    axios
      .get(hotelsUrl)
      .then((r) => {
        dispatch(getHotelsSuccess(r.data));
      })
      .catch((e) => dispatch(getHotelsFailure(e)));
  };
  useEffect(() => {
    getHotels();
  }, []);
  return (
    <div>
      <div className="hotelsData">
        {hotels?.map((i) => {
          return <Hotels key={i.id} items={i} />;
        })}
      </div>
    </div>
  );
};

export default User;
