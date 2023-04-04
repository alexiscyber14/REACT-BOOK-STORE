import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/bookSlice';
import categoriesReducer from './categories/categorySlice';

export const store = configureStore({
  reducer: {
    books: bookReducer,
    categories: categoriesReducer,
  },
});
