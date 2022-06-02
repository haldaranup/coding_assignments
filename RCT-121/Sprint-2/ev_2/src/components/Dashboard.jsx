import React from 'react'
import { useNavigate } from "react-router-dom";
export  const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <div>
    <button onClick={()=>{navigate("/registerpageone")}}>New Registeration</button>
    <h1>Dashboard</h1>
    <p>Username</p>
    <p>Email</p>
    <p>Address</p>
    <p>Phone Numbee</p>
    </div>

  )
}

