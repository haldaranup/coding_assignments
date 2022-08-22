import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  editProductFailure,
  editProductRequest,
  editProductSuccess,
} from "../Redux/action";

const Sidebar = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  

  const handleChange = (e) => {
    let type = e.target.value;

    if (type == "asc") {
      products.sort((a, b) => {
        return a.price - b.price;
      });
    } else if (type == "desc") {
      products.sort((a, b) => {
        return b.price - a.price;
      });
    } else return products;
  };

  return (
    <div style={{ minWidth: "250px" }} className="sidebar">
      <h3>Sort By</h3>
      <div>
        <div>
          <input
            type="radio"
            name="sort"
            data-cy="asc"
            value="asc"
            onChange={handleChange}
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            type="radio"
            name="sort"
            data-cy="desc"
            value="desc"
            onChange={handleChange}
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
