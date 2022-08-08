import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getWatches } from "../Redux/AppReducer/action";

const SingleWatch = () => {
  const dispatch = useDispatch();
  const watches = useSelector((state) => state.app.watches);
  const { id } = useParams();
  const singleWatch = watches.find((i) => i.id == id);

  useEffect(() => {
    dispatch(getWatches());
  }, []);
  return (
    <div>
      
      <h2>{singleWatch && singleWatch.name}</h2>
      <div className="img">
        <img src={singleWatch && singleWatch.image} alt="Cover Pic" />
      </div>
      <div>
        <div>{singleWatch && singleWatch.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
