import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductsList from "../features/products/ProductList";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/api/v1/products" element={<ProductList />} />
      <Route path="/api/v1//products/:id" element={<ProductDetails />} />
      <Route path="/api/v1//products/new" element={<h1>Novo</h1>} />
    </Routes>
  );
}

export default AppRoutes;
