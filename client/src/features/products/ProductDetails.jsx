import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import { API_URL } from '../../constants';

function PostDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchCurrentProduct = async () => {
      try {
        const response = await fetch(`${API_URL}/${id}`);
        if (response.ok) {
          const json = await response.json();
          setProduct(json);
        } else {
          throw response;
        }
      } catch (e) {
        console.log("Ocorreu um erro", e);
      }
    };
    fetchCurrentProduct();
  }, [id]);

  if  (!product) return <h3>Carregando...</h3>;

  return (
    <div>
        <div>
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <p>{product.stock_quantity}</p>
          <p>{product.description}</p>
        </div>
      <Link to="/">Voltar</Link>
    </div>
  );
}

export default PostDetails;
