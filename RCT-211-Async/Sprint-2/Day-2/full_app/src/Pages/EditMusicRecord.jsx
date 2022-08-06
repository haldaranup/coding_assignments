import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  editMusicFailure,
  editMusicRequest,
  editMusicSuccess,
} from "../State/App/action";

const EditMusicRecord = () => {
  const [music, setMusic] = useState("");
  const [artist, setArtist] = useState("");
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const editMusic = (payload) => {
    dispatch(editMusicRequest());
    axios
      .patch(`http://localhost:8080/albums/${id}`, payload)
      .then((r) => {
        dispatch(editMusicSuccess(r.data));
        alert(`Are you sure, you want to update?`);
        navigate("/");
      })
      .catch((e) => dispatch(editMusicFailure(e)));
  };

  const handleEdit = () => {
    if (music && artist) {
      let data = {
        name: music,
        artist: artist,
      };
      editMusic(data);
    }else alert(`Please enter something...`)
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        value={music}
        placeholder="Music Name"
        onChange={(e) => setMusic(e.target.value)}
      />
      <input
        type="text"
        value={artist}
        placeholder="Artist Name"
        onChange={(e) => setArtist(e.target.value)}
      />
      <button onClick={handleEdit}>Edit</button>
    </div>
  );
};

export default EditMusicRecord;
