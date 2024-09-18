import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../assets/icons/ClientLogLogo.png';

const Navbar: React.FC = () => {
  // State to control whether the navbar is open or closed
  const [isOpen, setIsOpen] = useState(true); // Default to false, meaning the navbar is closed initially

  // Function to toggle navbar visibility
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Hamburger icon, only shown when the navbar is closed */}
      {!isOpen && (
        <div className="hamburger" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      )}

      {/* Navbar that appears when isOpen is true */}
      {isOpen && (
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-logo">
              <img src={Logo} alt="Logo" />
            </li>
            <li className="nav-close" onClick={toggleNavbar}>
              X
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/client-log" className="nav-link">Client List</Link>
            </li>
            <li className="nav-item">
              <Link to="/service-history" className="nav-link">Service History</Link>
            </li>
            <li className="nav-item">
              <Link to="/analytics" className="nav-link">Analytics</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
