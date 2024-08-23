import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.scss'
import Logo from '../assets/icons/ClientLogLogo.png'

const Navbar: React.FC = () => {
    return (
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-logo"><img src={Logo} alt="" /></li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/client-log" className="nav-link">Client List</Link>
          </li>
          <li className="nav-item">
            <Link to="/analytics" className="nav-link">Analytics</Link>
          </li>
        </ul>
      </nav>
    );
  };

export default Navbar