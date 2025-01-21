import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 75) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${scrolling ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src="/assets/header-logo.png" alt="New Hue Restoration Logo" className={`logo-img ${scrolling ? 'small' : ''}`} />
      </div>
      <div className="header-text">
        <span className="text-part">New Hue Restoration </span>
        <span className="spin-plus">+</span>
        <span className="text-part"> Design™</span>
      </div>
      <nav className="nav-links">
        <ul className="desktop-menu">
          <li><Link to="/" className="nav-item">Home</Link></li>
          <li><Link to="/about" className="nav-item">About</Link></li>
          <li><Link to="/gallery" className="nav-item">Gallery</Link></li>
          <li className="nav-item dropdown">
            <Link to="/projects" className="nav-item">Projects</Link>
            <div className="dropdown-content">
              <Link to="/A2-Projects">Ann Arbor Projects</Link>
              <Link to="/D-Projects">Detroit Projects</Link>
              <Link to="/T-Projects">Tecumseh Projects</Link>
            </div>
          </li>
          <li><Link to="/request-work" className="nav-item request-work-button">Request Work</Link></li>
        </ul>
        {/* Hamburger menu */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        {/* Mobile dropdown */}
        {menuOpen && (
          <ul className="mobile-menu">
            <li><Link to="/" className="nav-item" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="nav-item" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/gallery" className="nav-item" onClick={toggleMenu}>Gallery</Link></li>
            <li className="nav-item dropdown">
              <Link to="/projects" className="nav-item" onClick={toggleMenu}>Projects</Link>
              <div className="dropdown-content">
                <Link to="/A2-Projects" onClick={toggleMenu}>Ann Arbor Projects</Link>
                <Link to="/D-Projects" onClick={toggleMenu}>Detroit Projects</Link>
                <Link to="/T-Projects" onClick={toggleMenu}>Tecumseh Projects</Link>
              </div>
            </li>
            <li><Link to="/request-work" className="nav-item request-work-button" onClick={toggleMenu}>Request Work</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Header;
