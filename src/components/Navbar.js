import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Headless CMS</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Content</Link>
      </div>
    </nav>
  );
}

export default Navbar;
