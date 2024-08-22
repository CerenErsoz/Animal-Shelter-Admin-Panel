//app in içerisinde birden fazla store olursa burada yönetmek bağlamak işlemler yapmak için buna ihtiyaç duyuluyor.

import { configureStore } from '@reduxjs/toolkit';
import animalsReducer from './slices/animalsSlice';

export const store = configureStore({
  reducer: {
    animals: animalsReducer,
  },
});