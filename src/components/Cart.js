// src/components/Cart.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Calcular el total de plantas
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calcular el coste total
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Funciones de acción
  const handleIncrement = (item) => {
    dispatch(incrementQuantity(item.id));
  };

  const handleDecrement = (item) => {
    dispatch(decrementQuantity(item.id));
  };

  const handleRemove = (item) => {
    dispatch(removeFromCart(item.id));
  };

  return (
    <div className="cart-page">
      <h1>Carrito de la Compra</h1>

      {/* Número total de plantas */}
      <div className="total-items">
        <p>Total de plantas en el carrito: {totalItems}</p>
      </div>

      {/* Mostrar los artículos en el carrito */}
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <p>{item.name}</p>
            <p>${item.price} x {item.quantity}</p>
            <div className="cart-item-actions">
              <button onClick={() => handleIncrement(item)}>+</button>
              <button onClick={() => handleDecrement(item)}>-</button>
              <button onClick={() => handleRemove(item)}>Eliminar</button>
            </div>
          </div>
        ))}
      </div>

      {/* Mostrar el total */}
      <div className="total">
        <p>Coste total: ${totalPrice}</p>
      </div>

      {/* Botones de pago y continuar comprando */}
      <div className="cart-buttons">
        <button className="checkout-button">Pagar (Próximamente)</button>
        <Link to="/products">
          <button className="continue-shopping-button">Seguir comprando</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
