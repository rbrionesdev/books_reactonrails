import React, { useState } from "react";
import axios from "axios";

const BookForm = (props) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    setError(false);
    console.log("obj: ", { title, author });
    
    try {
      let res = await axios.post("/api/books", { title, author });
      props.history.push("/books");
      //if successfull what should I do
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Add Book Form</h1>

      <div onClick={() => props.history.goBack()}>go back</div>
      {error && <p style={{ color: "red" }}>Error Occured</p>}
      
      <form onSubmit={handleSubmit}>
        <p>Title:</p>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <p>Author:</p>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />

        <button type="submit">Add</button>
      </form>
    </div>
  )
};

export default BookForm;