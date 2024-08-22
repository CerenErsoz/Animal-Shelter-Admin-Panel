import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from './slices/animalsSlice'; // Varsayılan olarak export edilen reducer'ı import edin

export const store = configureStore({
  reducer: {
    animals: animalsReducer, // Burada varsayılan olarak import edilen reducer'ı kullanıyoruz
  },
});
