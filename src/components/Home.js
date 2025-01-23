// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="home-background">
        <h1 className="home-title">Plantas para todo el mundo</h1>
        <p className="home-description">
          Bienvenido a Plantas para todo el mundo, tu destino para las plantas de interior más hermosas y saludables. Haz que tu hogar sea más verde y acogedor.
        </p>
        <Link to="/products">
          <button className="home-button">Comenzar</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
