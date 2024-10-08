import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ACONEWS</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/headlines">Headlines</Link></li>
        <li><Link to="/sports">Sports</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
