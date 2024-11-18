import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductForm = ({ productToEdit, refreshProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setPrice(productToEdit.price);
    }
  }, [productToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { name, price };

    if (productToEdit) {
      axios
        .put(
          `http://localhost:3000/api/v1/products/${productToEdit.id}`,
          productData
        )
        .then(() => {
          refreshProducts();
        })
        .catch((error) =>
          console.error("There was an error updating the product!", error)
        );
    } else {
      axios
        .post("http://localhost:3000/api/v1/products", productData)
        .then(() => {
          refreshProducts();
        })
        .catch((error) =>
          console.error("There was an error creating the product!", error)
        );
    }

    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{productToEdit ? "Editar um produto" : "Criar um produto"}</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ProductForm;
