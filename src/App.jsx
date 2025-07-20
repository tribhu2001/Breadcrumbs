import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import HomePage from './pages/HomePage';
import ProductsList from './pages/ProductsList';
import ProductDetails from './pages/ProductDetails';
import BreadCrumbs from './pages/BreadCrumbs';

function App() {
  return (
    <BrowserRouter>
      <div style={{fontFamily: 'sans-serif'}}>
        <div>
          <h1>Bobby Mart</h1>
        </div>
        <BreadCrumbs/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductsList />} />
          <Route path='/products/:id' element={<ProductDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
