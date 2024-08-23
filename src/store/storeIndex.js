
import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from './slices/animalsSlice'; 

const store = configureStore({
  reducer: {
    animals: animalsReducer,
  },
});

export default store; // Varsayılan export eklenmeli
