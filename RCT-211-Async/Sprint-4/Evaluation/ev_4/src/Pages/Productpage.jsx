import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../Components/ProductCard";
import {
  getProductsFailure,
  getProductsRequest,
  getProductsSuccess,
} from "../Redux/action";

const Productpage = () => {
  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const getData = () => {
    dispatch(getProductsRequest());
    axios
      .get("http://localhost:8080/products")
      .then((r) => {
        dispatch(getProductsSuccess(r.data));
      })
      .catch((e) => dispatch(getProductsFailure(e)));
  };

  useEffect(() => {
    getData();
  }, []);
  // console.log(products);

  return (
    <div style={{ width: "100%" }}>
      <div className="productsContainer">
        {products?.map((i) => {
          return <ProductCard item={i} key={i.id} />;
        })}
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */}
      </div>
    </div>
  );
};

export default Productpage;
