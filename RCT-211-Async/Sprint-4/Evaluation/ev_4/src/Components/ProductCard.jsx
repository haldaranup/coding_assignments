import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteProductFailure,
  deleteProductRequest,
  deleteProductSuccess,
  getProductsFailure,
  getProductsRequest,
  getProductsSuccess,
} from "../Redux/action";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // console.log(products)
  const getData = () => {
    dispatch(getProductsRequest());
    axios
      .get("http://localhost:8080/products")
      .then((r) => {
        dispatch(getProductsSuccess(r.data));
      })
      .catch((e) => dispatch(getProductsFailure(e)));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`)
  };
  const handleDelete = (id) => {
    dispatch(deleteProductRequest());
    axios
      .delete(`http://localhost:8080/products/${id}`)
      .then((r) => {
        getData()
        dispatch(deleteProductSuccess());
      })
      .catch((e) => dispatch(deleteProductFailure(e)));
  };

  return (
    <div data-cy={`product-card-${item.id}`}>
      <div data-cy="product-card-name">{item.title}</div>
      <div data-cy="product-card-category">{item.category}</div>
      <div className="img">
        <img
          data-cy="product-card-image"
          src={`${item.imageSrc}`}
          alt="Product"
        />
      </div>
      <div data-cy="product-card-price">€ {item.price}</div>
      <div className="btns">
        {/* Add a onClick handler for delete functionality */}
        <button data-cy="delete-button" onClick={() => handleDelete(item.id)}>
          Delete Product
        </button>
        {/* Link the Edit button to '/edit/:id' route, so that the user is navigate to the Edit page on button click */}
        <button data-cy="edit-button" onClick={() => handleEdit(item.id)}>
          Edit Product
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
