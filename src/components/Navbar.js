import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Content Management System</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add Content</Link>
      </div>
    </nav>
  );
}

export default Navbar;
