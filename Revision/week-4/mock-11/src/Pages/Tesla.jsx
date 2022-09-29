import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  postTeslaFailure,
  postTeslaRequest,
  postTeslaSuccess,
} from "../State/App/action";

const Tesla = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [state, setState] = useState("");
  const [year, setYear] = useState("");
  const [posted, setPosted] = useState(false);

  const dispatch = useDispatch();
  const handleAdd = (payload) => {
    dispatch(postTeslaRequest());
    axios
      .post("https://haldaranup.herokuapp.com/teslaIndia", payload)
      .then((r) => {
        alert("Added Successfully!!");
        dispatch(postTeslaSuccess(r.data));
        setPosted(true);
      })
      .catch((e) => dispatch(postTeslaFailure(e)));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = { name: name, age: age, state: state, yearOfPlanning: year };

    handleAdd(data);
  };

  return (
    <div className="tesla">
      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="State"
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year of Planning"
          onChange={(e) => setYear(e.target.value)}
        />
        <input id="add" type="submit"  />
      </form>
    </div>
  );
};

export default Tesla;
