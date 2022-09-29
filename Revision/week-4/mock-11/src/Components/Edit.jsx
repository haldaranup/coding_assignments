import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editTeslaFailure,
  editTeslaRequest,
  editTeslaSuccess,
} from "../State/App/action";

const Edit = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const editName = (payload) => {
    dispatch(editTeslaRequest());
    axios
      .patch(`https://haldaranup.herokuapp.com/teslaIndia/${id}`, payload)
      .then((r) => {
        dispatch(editTeslaSuccess(r.data));
        alert("Successfully edited");
        navigate("/admin/list");
      })
      .catch((e) => dispatch(editTeslaFailure(e)));
  };

  const handleUpdate = (e) => {
    e.preventDefault();

    let data = {
      name: name,
    };

    editName(data);
  };
  return (
    <div>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Change name"
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Edit;
