import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addProductFailure,
  addProductRequest,
  addProductSuccess,
} from "../Redux/action";

const AddProduct = () => {

  const isLoading = useSelector(state => state.isLoading)
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addData = (payload) => {
    dispatch(addProductRequest());
    axios
      .post("http://localhost:8080/products", payload)
      .then((r) => {
        dispatch(addProductSuccess(r.data));
        navigate("/")
      })
      .catch((e) => dispatch(addProductFailure(e)));
  };

  const handleAdd = () => {
    let data = {
      title: title,
      category: category,
      image: image,
      price: price,
    };

    addData(data);
  };

  return (
    <div className="add">
      <h3>Add Product</h3>
      <div className="addProducts">
        <div>
          <label>Product title</label>
          <input
            data-cy="add-product-title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Product Category</label>
          <select
            data-cy="add-product-category"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div>
          <label>Product Image</label>
          <input
            data-cy="add-product-image"
            type="url"
            placeholder="Image URL"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label>Product Price</label>
          <input
            data-cy="add-product-price"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="addBtn">
          <button data-cy="add-product-button" onClick={handleAdd}>
            {isLoading ? "Loading..." :"Add"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
