import React, { useState } from "react";
import BookList from "./features/books/BookList";
import BookForm from "./features/books/BookForm";

const App = () => {
  const [bookToEdit, setBookToEdit] = useState(null);

  const handleEdit = (book) => {
    setBookToEdit(book);
  };

  const handleCancel = () => {
    setBookToEdit(null);
  };

  return (
    <div className="App">
      <BookForm bookToEdit={bookToEdit} onHandleCancel={handleCancel} />
      <BookList onHandleEdit={handleEdit} />
    </div>
  );
};

export default App;
