import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Todos from '../Components/Todos'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Todos />}/>
    </Routes>
  )
}

export default MainRoutes