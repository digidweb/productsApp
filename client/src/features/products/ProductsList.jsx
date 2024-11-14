import React, { useState, useEffecct } from 'react';
import { API_URL } from '../../constants';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);

  React.useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch(API_URL);
        if (response.ok) {
            const json = await response.json();
            setProducts(json);
        } else {
            throw response;
        }
      } catch (e) {
          setError("Ocorreu um erro ao carregar os produtos");
          console.log("Ocoreu um erro", e);
      } finally {
          setLoading(false);
      }
    }
    loadProducts()
  }, []);


  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-container">
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <p>{product.stock_quantity}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductsList;
