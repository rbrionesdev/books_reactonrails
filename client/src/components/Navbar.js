import React, { useState } from "react";
import { Link } from "react-router-dom"
import { Menu } from 'semantic-ui-react'

const NavBar = (props) => {
  const [activeItem, setActiveItem] = useState("");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <Menu>
      <Link to="/">
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={handleItemClick}
        >
          Home
        </Menu.Item>
      </Link>
      <Link to="/books">
        <Menu.Item
          name='books'
          active={activeItem === 'books'}
          onClick={handleItemClick}
          >
          Books
        </Menu.Item>
      </Link>
      <Link to="/books/new">
        <Menu.Item
          name='addbook'
          active={activeItem === 'addbook'}
          onClick={handleItemClick}
        >
          Add Book
        </Menu.Item>
      </Link>
    </Menu>
  );
};

export default NavBar;