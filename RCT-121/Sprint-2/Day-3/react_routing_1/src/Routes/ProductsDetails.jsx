import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';

export const ProductDetails = () => {
const [loading,setLoading] =useState(true);

const[error,setError] =useState(true);
const [data,setData] =useState([]);
const {id} =useParams()

useEffect(()=>{
    setLoading(true);
    axios({
  
    url:`http://localhost:8080/products/${id}`,
    method:"GET",
    }).then(res=>{
        setLoading(false);
        setData(res.data)
    }).catch(err=>{
        setLoading(false);
        setError(true);
    })
},[])
console.log(data)

  return (

  
    <div >
        {loading && <div>...loding</div>}
        {error && <div>...something went wrong!</div>}

      <div>
         <img src={data.thumbnail}></img>
         <p>Name: {data.title}</p>
         <p>Description :{data.description}</p>
         <p>Brand :{data.brand}</p>
         <p>Price ${data.price}</p>
         <p>DiscountPercentage : {data.discountPercentage}</p>
         <p>Rating : {data.rating}</p>

      </div>
    </div>
  )
}
