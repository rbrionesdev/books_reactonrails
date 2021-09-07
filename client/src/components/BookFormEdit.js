import axios from "axios";
import React, { useState, useEffect } from "react";

const BookFormEdit = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    getBook();
  }, []);

  const getBook = async () => {
    try {
      let res = await axios.get(`/api/books/${props.match.params.id}`);
      setTitle(res.data.title);
      setAuthor(res.data.author);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    setError(false);
    console.log("obj: ", { title, author });
    try {
      let res = await axios.put(`/api/books/${props.match.params.id}`, {
        title,
        author,
      });
      props.history.push("/books");
      // if successfull what should I do
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };
  return (
    <div>
      <h1>Edit Book Form</h1>
      <div onClick={() => props.history.goBack()}>go back</div>
      {error && <p style={{ color: "red" }}>Error Occured</p>}

      <form onSubmit={handleSubmit}>
        <p>Title:</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <p>Author:</p>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      
        <button type="submit">Edit!!!</button>
      </form>
    </div>
  );
};

export default BookFormEdit;