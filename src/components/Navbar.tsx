import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../assets/icons/ClientLogLogo.png';

const Navbar: React.FC = () => {
  // State to control whether the navbar is open or closed
  const [isOpen, setIsOpen] = useState(false); // Default to false, meaning the navbar is closed initially
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Detect if the screen is mobile-sized

  // Function to toggle navbar visibility
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  // Update the isMobile state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(true); // Ensure navbar is always open on desktop
      }
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {/* Hamburger icon, only shown on mobile when the navbar is closed */}
      {!isOpen && isMobile && (
        <div className="hamburger" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      )}

      {/* Navbar that appears when isOpen is true or it's not mobile */}
      {(isOpen && !isMobile) && (
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-logo">
              <img src={Logo} alt="Logo" />
            </li>
            {/* Close icon, only shown on mobile */}
            {isMobile && (
              <li className="nav-close" onClick={toggleNavbar}>
                X
              </li>
            )}
            <li className="nav-item" onClick={toggleNavbar}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item" onClick={toggleNavbar}>
              <Link to="/client-log" className="nav-link">Client List</Link>
            </li>
            <li className="nav-item" onClick={toggleNavbar}>
              <Link to="/service-history" className="nav-link">Service History</Link>
            </li>
            <li className="nav-item" onClick={toggleNavbar}>
              <Link to="/analytics" className="nav-link">Analytics</Link>
            </li>
          </ul>
        </nav>
      )}

            {/* Navbar that appears when isOpen is true or it's not mobile */}
      {(isOpen || !isMobile) && (
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-logo">
              <img src={Logo} alt="Logo" />
            </li>
            {/* Close icon, only shown on mobile */}
            {isMobile && (
              <li className="nav-close" onClick={toggleNavbar}>
                X
              </li>
            )}
            <li className="nav-item" onClick={toggleNavbar}>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item" onClick={toggleNavbar}>
              <Link to="/client-log" className="nav-link">Client List</Link>
            </li>
            <li className="nav-item" onClick={toggleNavbar}>
              <Link to="/service-history" className="nav-link">Service History</Link>
            </li>
            <li className="nav-item" onClick={toggleNavbar}>
              <Link to="/analytics" className="nav-link">Analytics</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;