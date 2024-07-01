import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.title} - ${item.price}</li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
