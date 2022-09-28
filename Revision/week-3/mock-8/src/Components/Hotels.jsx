import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteHotelFailure,
  deleteHotelRequest,
  deleteHotelSuccess,
  getHotelsFailure,
  getHotelsRequest,
  getHotelsSuccess,
} from "../State/action";

import "../Styles/hotelsLists.css";

const Hotels = ({ items }) => {
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

  const handleDelete = (id) => {
    dispatch(deleteHotelRequest());
    axios
      .delete(`${hotelsUrl}/edit/${id}`)
      .then((r) => {
        getHotels();
        dispatch(deleteHotelSuccess());
      })
      .catch((e) => dispatch(deleteHotelFailure(e)));
  };
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="hotelList">
      <p>Category :{items.category}</p>
      <img src={items.image_url} alt="" />
      <p>Room :{items.type_of_room}</p>
      <p>Type :{items.bed_type}</p>
      <p>Person :{items.no_of_persons}</p>
      <p>Capacity :{items.capacity}</p>
      <p>Cost :{items.cost}</p>
      <p>Is Booked? :{items.booked ? "Yes" : "No"}</p>

      <button className="book">Book Now</button>
    </div>
  );
};

export default Hotels;
