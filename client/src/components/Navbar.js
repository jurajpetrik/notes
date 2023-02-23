import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Juraj's Notetaking App</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">Create a Note</Link>
      </div>
    </nav>
  );
}

export default Navbar;
