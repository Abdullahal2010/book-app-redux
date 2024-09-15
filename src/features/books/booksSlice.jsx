import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [
    {
      id: 1,
      title: "My book title",
      author: "Noman",
      price: 12,
      quantity: 5,
    },
    {
      id: 2,
      title: "Kurie pawa somman",
      author: "Noman",
      price: 10,
      quantity: 10,
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    deleteBook: (state, action) => {
      const id = action.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },

    addBook: (state, action) => {
      const book = action.payload;

      state.books.push(book);
    },

    updateBook: (state, action) => {
      const newBook = action.payload;

      const existingBook = state.books.find((book) => book.id === newBook.id);
      console.log(existingBook);

      if (existingBook) {
        existingBook.title = newBook.title;
        existingBook.quantity = newBook.quantity;
        existingBook.author = newBook.author;
        existingBook.price = newBook.price;
      }
    },
  },
});

export const { deleteBook, addBook, updateBook } = booksSlice.actions;

export default booksSlice.reducer;
