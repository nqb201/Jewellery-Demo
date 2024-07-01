import React, { useContext } from 'react';
import './ProductCard.css';
import { CartContext } from '../../contexts/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  // Convert product price to number
  const price = parseFloat(product.price.replace('$', ''));

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${price.toFixed(2)}</p>
      <button className="add-to-cart-button" onClick={() => addToCart(product)}>
        Add To Cart <span className="cart-icon">🛒</span>
      </button>
      <button className="buy-now-button">
        Buy Now <span className="buy-now-icon">➡️</span>
      </button>
    </div>
  );
}

export default ProductCard;
