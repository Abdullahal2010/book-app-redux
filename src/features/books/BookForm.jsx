import { nanoid } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, updateBook } from "./booksSlice";

const BookForm = ({ bookToEdit, onHandleCancel }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    price: "",
    quantity: "",
  });

  useEffect(() => {
    if (bookToEdit) {
      setBook(bookToEdit);
    }
  }, [bookToEdit]);

  const dispatch = useDispatch();

  const { title, author, price, quantity } = book;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => {
      return {
        ...prevBook,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (bookToEdit) {
      dispatch(updateBook(book));
    } else {
      dispatch(addBook({ ...book, id: nanoid() }));
    }

    setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });
  };

  const handleCancleClick = () => {
    setBook({
      title: "",
      author: "",
      price: "",
      quantity: "",
    });

    onHandleCancel();
  };

  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title: "
          value={title}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="author"
          id="author"
          placeholder="Author: "
          value={author}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          id="price"
          placeholder="Price: "
          value={price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          id="quantity"
          placeholder="Quantity: "
          value={quantity}
          onChange={handleChange}
          required
        />

        <button type="submit">{bookToEdit ? "Save" : "Add Book"}</button>
      </form>
      {bookToEdit && <button onClick={handleCancleClick}>Cancel</button>}
    </>
  );
};

export default BookForm;
