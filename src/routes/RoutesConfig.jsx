import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login';
import Cart from '../pages/Cart';
import Catalog from '../pages/Catalog';
import Home from '../pages/Home';
import Product from '../pages/Product';

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalog/:slug' element={<Product />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default RoutesConfig;
