import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getMusicRecords } from "../State/App/action";

const SingleMusicRecord = () => {
  const dispatch = useDispatch();
  const music = useSelector((state) => state.app.music);
  const isAuth = useSelector((state) => state.auth.isAuth);
  // console.log(music)
  const { id } = useParams();
  const singleMusic = music.find((i) => i.id == id);

  useEffect(() => {
    dispatch(getMusicRecords());
  }, []);
  
  return (
    <div>
      {singleMusic && (
        <div>
          <h2>SingleMusicRecord</h2>
          <h4>{singleMusic.name}</h4>
          <p>{singleMusic.year}</p>
          <div>
            <img src={singleMusic.img} alt="" />
          </div>
          <p>{singleMusic.artist}</p>
          <p>{singleMusic.genre}</p>

          <Link to={`/music/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SingleMusicRecord;
