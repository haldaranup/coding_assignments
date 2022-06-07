import React from 'react'
import { Navbar } from './Navbar'
import { Routes,Route } from 'react-router-dom'
import { Home } from './Home'
import { Products } from './Products'
import { ProductDetails } from './ProductsDetails'
export const AllRoutes = () => {
  return (
  <>
  <Navbar/>

  <Routes>

      <Route path="/" element={<Home/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path ="/products/:id" element={
          
                <ProductDetails/>
          
        }></Route>
  </Routes>
  
  </>
  )
}
