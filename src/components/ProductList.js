// src/components/ProductList.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice'; 
import '../styles/ProductList.css';

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Lista de plantas
  const plants = [
    { id: 1, name: 'Tomate', price: 15, category: 'Follaje', image: process.env.PUBLIC_URL + '/img/tomate_img.png' },
    { id: 2, name: 'Aguacate', price: 25, category: 'Floración', image: process.env.PUBLIC_URL + '/img/aguacate_img.png' },
    { id: 3, name: 'Cactus', price: 10, category: 'Suculentas', image: process.env.PUBLIC_URL + '/img/cactus_img.png' },
    { id: 4, name: 'Rosas', price: 12, category: 'Follaje', image: process.env.PUBLIC_URL + '/img/rosas_img.png' },
    { id: 5, name: 'Claveles', price: 18, category: 'Follaje', image: process.env.PUBLIC_URL + '/img/claveles_img.png' },
    { id: 6, name: 'Aloe Vera', price: 14, category: 'Suculentas', image: process.env.PUBLIC_URL + '/img/aloe_img.png' },
  ];

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-list">
      <h1>Plantas Disponibles</h1>
      {/* Lista de productos */}
      <div className="products">
        {plants.map((plant) => (
          <div key={plant.id} className="product-card">
            <img src={plant.image} alt={plant.name} className="product-image" />
            <h2 className="product-name">{plant.name}</h2>
            <p className="product-price">${plant.price}</p>
            <button
              className="add-to-cart-button"
              onClick={() => handleAddToCart(plant)}
              disabled={cartItems.some((item) => item.id === plant.id)}
            >
              {cartItems.some((item) => item.id === plant.id) ? 'Añadido' : 'Añadir a la cesta'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
