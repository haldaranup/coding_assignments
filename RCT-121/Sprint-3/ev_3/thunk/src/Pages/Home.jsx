import React from 'react'
import { useNavigate } from 'react-router'
// https://reqres.in/
export const Home = () => {
const navigate = useNavigate()
const handleSubmit = ()=>{
    navigate('/posts')
}
  return (
    <div>
       <h1>Home</h1> 
        <input type="text" />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}


