// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';  // Asegúrate de que el cartSlice esté correctamente importado

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;  // Asegúrate de que esto esté presente
