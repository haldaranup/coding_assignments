import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {ShoeCard} from "./ShoeCard/index"
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";

const Shoes = () => {
  const dispatch = useDispatch();
  const shoes = useSelector((state) => state.shoes);

  const getShoes = () => {
    dispatch(getShoesRequest());
    axios
      .get("/shoes")
      .then((r) => dispatch(getShoesSuccess(r.data)))

      .catch((e) => dispatch(getShoesFailure(e)));
  };

  useEffect(() => {
    getShoes();
  }, []);
  console.log(shoes);
  return (
    <div className="mainDiv">
      {/* Map through the shoes list here */}
      {shoes.map((i) => {
        return (
          
          <div className="container">
            <ShoeCard key={i.id} {...i} />
            
          </div>
        );
      })}
    </div>
  );
};

export default Shoes;
