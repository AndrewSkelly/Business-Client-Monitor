import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';  // Import NavLink from react-router-dom
import './Navbar.scss';
import Logo from '../assets/icons/ClientLogLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faChartSimple, faHouse, faUsers } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(true); // Ensure navbar is always open on desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {!isOpen && isMobile && (
        <div className="hamburger" onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      )}

      {(isOpen || !isMobile) && (
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-logo">
              <img src={Logo} alt="Logo" />
            </li>
            {isMobile && (
              <li className="nav-close" onClick={toggleNavbar}>
                X
              </li>
            )}
            <li className="nav-item" onClick={toggleNavbar}>
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                <FontAwesomeIcon className="nav-icon" icon={faHouse} />Home
              </NavLink>
            </li>
            <li className="nav-item" onClick={toggleNavbar}>
              <NavLink
                to="/client-log"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                <FontAwesomeIcon className="nav-icon" icon={faUsers} />Client List
              </NavLink>
            </li>
            <li className="nav-item" onClick={toggleNavbar}>
              <NavLink
                to="/service-history"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                <FontAwesomeIcon className="nav-icon" icon={faCalendarDays} />Service History
              </NavLink>
            </li>
            <li className="nav-item" onClick={toggleNavbar}>
              <NavLink
                to="/analytics"
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
              >
                <FontAwesomeIcon className="nav-icon" icon={faChartSimple} />Analytics
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navbar;
