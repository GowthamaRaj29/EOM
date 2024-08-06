import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import userprofile from '../assets/Profile.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo-n">Devents</div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/bookings">Book Now</Link></li>
        <li className={`dropdown ${isDropdownOpen ? 'open' : ''}`} ref={dropdownRef} onClick={toggleDropdown}>
          <a href="#user" className="user-profile"><img src={userprofile} alt="User Profile" className="user-icon" /></a>
          <div className="dropdown-menu">
            <a href="/login">Logout</a>
          </div>
        </li>
      </ul>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
