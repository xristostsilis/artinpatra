import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">ArtInPatra</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Αρχική</Link>
        <Link to="/events">Εκδηλώσεις</Link>
        <Link to="/past-events">Περασμένες Εκδηλώσεις</Link> {/* New link */}
        <Link to="/contact">Επικοινωνία</Link>
      </div>
    </nav>
  );
};

export default Navbar;
