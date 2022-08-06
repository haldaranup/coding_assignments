import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import MusicList from "../Components/MusicList";
import { getMusicRecords } from "../State/App/action";

const MusicRecords = () => {
  const dispatch = useDispatch();
  const music = useSelector((state) => state.app.music);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  // console.log(location);
  const initialState = searchParams.getAll("genre");
  const initialSort = searchParams.get("sort");

  const mapSort = (data) => {
    return data
      .sort((a, b) => {
        if (initialSort == "asc") {
          return a.year - b.year;
        } else if (initialSort == "desc") {
          return b.year - a.year;
        } else return music;
      })
      .map((i) => {
        return <MusicList i={i} key={i.id} />;
      });
  };

  useEffect(() => {
    if (music.length === 0) {
      dispatch(getMusicRecords());
    }
  }, [location.search]);

  return (
    <div className="musicContainer">
      <Filter />
      <div className="musicList">
        {mapSort(
          music.filter((i) => {
            // console.log(initialState.includes(i.genre));
            return initialState.includes(i.genre);
          })
        )}
        {initialState.length === 0 && mapSort(music)}
      </div>
    </div>
  );
};

export default MusicRecords;
