import React, { useEffect, useState } from 'react';
import axios from "axios";
import Book from "./Book";

const Books = (props) => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    console.log("Book component mounting");
    getBooks();
    return () => {
      console.log("Book component unmounting");
    };
  }, []);

  const getBooks = async () => {
    try {
      let res = await axios.get("/api/books");
      setBooks(res.data);
      console.log("Books here in res.data:", res.data);
    } catch (err) {
      alert("err occured getting books check console/server, need to debug");
      console.log(err);
    }
  };

  const deleteBook = async (id) => {
    try {
      let res = await axios.delete(`/api/books/${id}`);
      let filterBooks = books.filter((b) => b.id !== id);
      setBooks(filterBooks);
    } catch (err) {
      console.log(err);
    }
  };

  const updateBook = (book) => {
    let updateBooks = books.map((b) => (b.id == book.id ? book : b));
    setBooks(updateBooks);
  };

  const renderBooks = () => {
    return books.map((b) => 
    <Book 
    deleteBookProp={deleteBook} 
    updateBookProp={updateBook} 
    key={b.id} 
    {...b} />);
  };

  return (
    <div>
      <h1 style={styles.home}>Books</h1>
      <div>{renderBooks()}</div> 
    </div>
  );
};

const styles = {
  home: {
    textAlign: "center",
  },
};

export default Books;