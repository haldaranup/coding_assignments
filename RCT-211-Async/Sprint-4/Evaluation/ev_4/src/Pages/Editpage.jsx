import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { editProductFailure, editProductRequest, editProductSuccess } from "../Redux/action";

const Editpage = () => {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const navigate = useNavigate()

  const {id} = useParams()

  const dispatch = useDispatch()

  const patchData = (payload) =>{
    dispatch(editProductRequest())
    axios.patch(`http://localhost:8080/products/${id}`, payload)
    .then((r) => {
      dispatch(editProductSuccess(r.data))
      navigate("/")
    })
    .catch(e => dispatch(editProductFailure()))
  }


const handleUpdate = () =>{
  let data = {
    title: title,
    price: price
  }

  patchData(data)
}






  return (
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <div>
        <label>Product Title</label>
        <input data-cy="edit-product-title" type="text" onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Product Price</label>
        <input data-cy="edit-product-price" type="number" onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button data-cy="update-button" onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default Editpage;
