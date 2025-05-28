import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`navbar ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/" className="nav-link" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" className="nav-link" onClick={closeMenu}>About us</NavLink>
        <NavLink to="/menu" className="nav-link" onClick={closeMenu}>Menu</NavLink>
        <NavLink to="/reserve" className="nav-link" onClick={closeMenu}>Reservations</NavLink>
        <NavLink to="/services" className="nav-link" onClick={closeMenu}>Our services</NavLink>
        <NavLink to="/contact" className="nav-link" onClick={closeMenu}>Contact Us</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
