import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Filter from "../Components/Filter";
import WatchCard from "../Components/WatchCard";
import { getWatches } from "../Redux/AppReducer/action";

const Watches = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const watches = useSelector((state) => state.app.watches);
  const initialState = searchParams.getAll("category");
  // console.log(initialState);
  // console.log(watches);

  useEffect(() => {
    dispatch(getWatches());
  }, []);

  const map = (data) => {
    return data.map((i) => {
      return <WatchCard {...i} key={i.id} />;
    });
  };

  return (
    <div className="mainContainer">
      <Filter />
      <div className="watchCard">
        {/* Map through the watch list here using WatchCard Component */}
        {map(
          watches.filter((i) => {
            return initialState.includes(i.category);
          })
        )}

        {initialState.length === 0 && map(watches)}
      </div>
    </div>
  );
};

export default Watches;
