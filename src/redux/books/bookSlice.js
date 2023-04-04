import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const app_id = 'qppIixowAMLw0vNzEAbF';
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${app_id}/books`);
  const books = Object.entries(response.data)
    .flatMap(([item_id, books]) => books.map((book) => ({ ...book, item_id })));
  return Array.isArray(books) ? books : [];
});

export const addBook = createAsyncThunk('books/addBook', async ({ title, author, category }) => {
  const item_id = Math.random().toString(36).substring(2, 11); // Generate random ID
  const response = await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${app_id}/books`, {
    item_id, title, author, category,
  });
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async ({ item_id }) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${app_id}/books/${item_id}`);
  return item_id;
});

const initialState = [];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => state.filter(
        (book) => book.item_id !== action.payload,
      ));
  },
});

export default bookSlice.reducer;
