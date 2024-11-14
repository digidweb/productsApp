import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsList from '../features/products/ProductsList';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductsList />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/new" element={<h1>Novo</h1>} />
    </Routes>
  );
}

export default AppRoutes;
