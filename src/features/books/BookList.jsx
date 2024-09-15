import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "./booksSlice";

const BookList = ({ onHandleEdit }) => {
  const books = useSelector((state) => state.booksR.books);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // alert(id);
    dispatch(deleteBook(id));
  };

  const handleEdit = (book) => {
    onHandleEdit(book);
  };

  return (
    <div>
      <h2>List of Books</h2>
      <ul>
        {books && books.length > 0
          ? books.map((book) => (
              <li key={book.id}>
                {book.title} by {book.author} - $ {book.price} - {book.quantity}{" "}
                pcs
                <button onClick={() => handleDelete(book.id)}>Delete</button>
                <button onClick={() => handleEdit(book)}>Edit</button>
              </li>
            ))
          : "No books are exist"}
      </ul>
    </div>
  );
};

export default BookList;
