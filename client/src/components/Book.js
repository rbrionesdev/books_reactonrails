import React from "react";
import { useHistory } from "react-router";
import 'semantic-ui-css/semantic.min.css'


const Book = ({ id, title, author, deleteBookProp }) => {

  const history = useHistory();
  return (
    <div style={styles.container}>
      <div style={styles.book}>
        <h3 style={styles.header}>{id} {title}</h3>
        <p style={styles.user}>{author}</p>
      </div>
      <div>
        <div onClick={() => history.push(`/books/${id}/edit`)}>Edit</div>
        <div onClick={() => deleteBookProp(id)}>Delete</div>
      </div>
    </div>
  );
};

const styles = {
  header: {
    fontSize: "26px",
  },
  user: {
    fontSize: "16px",
    color: "#666",
  },
  border: {
    border: "1px solid",
  },
  book: {
    paddingBottom: "20px",
    display: "flex",
    alignContent: "flex-start",
    justifyItems: "flex-start",
    flexDirection: "column",
  },
  container: {
    display: "flex",
    justContent: "flex-start",
    flexDirection: "column",
    margin: "20px",
    padding: "20px",
    boxShadow:
      "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
  },
};

export default Book;
