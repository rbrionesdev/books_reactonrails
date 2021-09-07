import React from "react";
import { Link } from "react-router-dom"

const NavBar = (props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      {/* <Link to="/books/new">NewBook</Link> */}
    </div>
  );
};

export default NavBar;