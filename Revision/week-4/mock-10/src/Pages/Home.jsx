import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "../Components/ProductsList";
import { getProducts } from "../State/action";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const isLoading = useSelector((state) => state.isLoading);
  console.log("products:", products);
  let page = 1;
  let sort = "asc";

  const handleSort = (e) => {
    sort = e.target.value;
    dispatch(getProducts({ page, sort }));
  };

  const handleFilter = (e) => {
    let filterValue = e.target.value
    products.filter((i) => {
        return i.category == filterValue
    })
  };

  useEffect(() => {
    dispatch(getProducts({ page, sort }));
  }, []);
  return (
    <>
      {isLoading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <>
          <select className="sort" onChange={handleSort}>
            <option value="asc">Low to High</option>
            <option value="desc">High to Low</option>
          </select>
          <select className="filter sort" onChange={handleFilter}>
            <option value="kids">Kids</option>
            <option value="women">Women</option>
            <option value="homedecor">Homedecor</option>
          </select>
          <div className="productsList">
            {products?.map((i) => {
              return <ProductsList items={i} key={i.id} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
