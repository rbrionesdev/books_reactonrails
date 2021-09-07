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

  const renderBooks = () => {
    return books.map((b) => <Book key={b.id} {...b} />);
  };

  return (
    <div>
      <h1>Books</h1>
      <div>{renderBooks()}</div> 
    </div>
  );
};

export default Books;