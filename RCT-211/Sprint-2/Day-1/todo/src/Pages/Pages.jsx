import { Routes, Route } from 'react-router-dom'
import React from 'react'
import HomePage from './HomePage'
import SingleTodo from './SingleTodo'

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/todos/:id" element={<SingleTodo />} />

      
    </Routes>
  )
}

export default Pages