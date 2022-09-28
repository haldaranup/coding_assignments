import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editHotelFailure,
  editHotelRequest,
  editHotelSuccess,
} from "../State/action";

import "../Styles/admin.css";

const Edit = () => {
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [rooms, setRooms] = useState("");
  const [bed, setBed] = useState("");
  const [person, setPerson] = useState("");
  const [capacity, setCapacity] = useState("");
  const [cost, setCost] = useState("");
  const [booked, setBooked] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const dispatch = useDispatch();
  let hotelsUrl = "https://haldaranup.herokuapp.com/hotels";
  const editData = (payload) => {
    dispatch(editHotelRequest());
    axios
      .patch(`${hotelsUrl}/${id}`, payload)
      .then((r) => {
        dispatch(editHotelSuccess(r.data));
        alert("Successfully edited")
        navigate("/admin");
      })
      .catch((e) => dispatch(editHotelFailure(e)));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    let data = {
      category: category,
      image_url: image,
      type_of_room: rooms,
      bed_type: bed,
      no_of_persons: person,
      capacity: capacity,
      cost: cost,
      booked: booked,
    };

    editData(data);
  };
  return (
    <div className="adminPost">
      <form onSubmit={handleUpdate}>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="family">Family</option>
          <option value="deluxe">Deluxe</option>
          <option value="suite">Suite</option>
        </select>
        <label htmlFor="img">Image Link</label>
        <input
          type="text"
          id="img"
          onChange={(e) => setImage(e.target.value)}
        />
        <div className="roomsAc">
          <label htmlFor="ac">AC</label>
          <input
            type="radio"
            value="ac"
            name="ac"
            id="ac"
            onChange={(e) => setRooms(e.target.value)}
          />
          <label htmlFor="nonac">Non AC</label>
          <input
            type="radio"
            value="nonac"
            name="ac"
            id="nonac"
            onChange={(e) => setRooms(e.target.value)}
          />
        </div>
        <select onChange={(e) => setBed(e.target.value)}>
          <option value="single">Single</option>
          <option value="double">Double</option>
        </select>
        <label htmlFor="adults">No of Adults</label>
        <input
          type="text"
          id="adults"
          onChange={(e) => setPerson(e.target.value)}
        />
        <label htmlFor="capacity">Max Capacity</label>
        <input
          type="text"
          id="capacity"
          onChange={(e) => setCapacity(e.target.value)}
        />
        <label htmlFor="cost">Cost per night in Rs </label>
        <input
          type="text"
          id="cost"
          onChange={(e) => setCost(e.target.value)}
        />
        <label htmlFor="booked">Is Booked?</label>
        <select onChange={(e) => setBooked(e.target.value)}>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <input className="submit" type="submit" />
      </form>
    </div>
  );
};

export default Edit;
