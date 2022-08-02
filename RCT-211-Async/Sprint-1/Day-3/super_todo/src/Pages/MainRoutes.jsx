import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Todos from '../Components/Todos'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Todos/>} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default MainRoutes