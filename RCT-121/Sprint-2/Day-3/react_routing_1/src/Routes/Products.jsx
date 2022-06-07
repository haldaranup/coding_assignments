import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom';
export const Products = () => {
const [loading,setLoading] =useState(true);

const[error,setError] =useState(true);
const [data,setData] =useState([]);

useEffect(()=>{
    setLoading(true);
    axios({
  
    url:"http://localhost:8080/products",
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

  
    <div>
        {loading && <div>...loding</div>}
        {error && <div>...something went wrong!</div>}

       
      {data.map((e)=>(
          <div key={e.id}>

  
         <div>{e.title}</div>
         <div>${e.price}</div>
         <div>

         <Link to={`/products/${e.id}`}>See more details</Link>
      
         </div>

          </div>

      ))}
 


    </div>
  )
}
