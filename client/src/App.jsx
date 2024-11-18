import React, { useState } from "react";
import ProductList from "./features/products/ProductList";
import ProductForm from "./features/products/ProductForm";
import ProductDetails from "./features/products/ProductDetails";

const App = () => {
  const [editProduct, setEditProduct] = useState(null);

  const refreshProducts = () => {
    setEditProduct(null);
  };

  return (
    <div>
      <ProductForm
        productToEdit={editProduct}
        refreshProducts={refreshProducts}
      />
      <ProductList setEditProduct={setEditProduct} />
    </div>
  );
};

export default App;
