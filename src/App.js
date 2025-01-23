// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';  // Asegúrate de importar Provider
import store from './store/store';  // Asegúrate de importar el store
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Home from './components/Home';
import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>  {/* Envuelve la aplicación en el Provider */}
      <BrowserRouter>
        <Header />  {/* La cabecera se incluye fuera de las rutas para que aparezca siempre */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
