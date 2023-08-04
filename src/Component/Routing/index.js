import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from '../Products'
import Product from '../Product'
import Home from '../Home'
import ToDOList from '../To-Do-List'
import Cart from '../Cart'

function Routing() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/products" element={<Products/>} />
            <Route path="/product/:id" element={<Product/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/toDo" element={<ToDOList/>} />
        </Routes>
    </div>
  )
}

export default Routing