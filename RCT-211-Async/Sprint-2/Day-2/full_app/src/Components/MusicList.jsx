import React from "react";
import { Link } from "react-router-dom";

const MusicList = ({ i }) => {
  return (
    <div className="musicWrapper">
      <p>{i.name}</p>
      <p>{i.year}</p>
      <Link to={`/music/${i.id}`}>
        <div>
          <img src={i.img} alt="" />
        </div>
      </Link>
      <p>{i.artist}</p>
      <p>{i.genre}</p>
      <p>{i.no_of_songs}</p>
      {/* {i.songs.map((d) => {
                return <div>
                    <p>{d.name}</p>
                </div>
            })} */}

      <p>{i.songs.name}</p>
    </div>
  );
};

export default MusicList;
