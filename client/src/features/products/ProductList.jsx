import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductList = ({ setEditProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/products")
      .then((response) => setProducts(response.data))
      .catch((error) =>
        console.error("There was an error fetching the products!", error)
      );
  }, []);

  return (
    <div>
      <h2>Lista de Produtos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => setEditProduct(product)}>Editar</button>
            <button onClick={() => handleDelete(product.id)}>Apagar</button>
          </li>
        ))}
      </ul>
    </div>
  );

  function handleDelete(id) {
    axios
      .delete(`http://localhost:3000/api/v1/products/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) =>
        console.error("There was an error deleting the product!", error)
      );
  }
};

export default ProductList;
