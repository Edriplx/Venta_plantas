// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Header.css';  // Estilos para la cabecera

const Header = () => {
  const totalItems = useSelector((state) => state.cart.totalItems);  // Obtener el número total de artículos en el carrito

  return (
    <header className="header">
      <h1 className="company-name">Plantas para todo el mundo</h1>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-link">Inicio</Link>
          </li>
          <li>
            <Link to="/products" className="nav-link">Productos</Link>
          </li>
          <li className="cart-link">
            <Link to="/cart" className="nav-link">
              <span className="cart-icon">Carrito de compras 🛒</span> {/* Icono del carrito */}
              <span className="cart-count">{totalItems}</span> {/* Número de artículos */}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
