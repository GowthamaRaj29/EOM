import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Footer.css';
import Github from '../assets/Github.png';
import Linkedin from '../assets/Linkedin.png';
import Instagram from '../assets/Instagram.png';
import Whatsapp from '../assets/Whatsapp.png';

const Footer = () => {
  return (
    <div className="footer-container">
      <hr className="footer-divider" />
      <div className="footer-content">
        <div className="footer-section">
          <h3>Features</h3>
          <a href="#personalized-event-planning">Personalized Event Planning</a>
          <a href="#virtual-event">Virtual Event</a>
          <a href="#exhibition-management">Exhibition Management</a>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/home">Home</Link> {/* Updated to use Link */}
          <Link to="/services">Services</Link> {/* Updated to use Link */}
          <Link to="/contact">Contact</Link> {/* Updated to use Link */}
          <Link to="/bookings">Book Now</Link> {/* Updated to use Link */}
        </div>
        <div className="footer-section">
          <h3>Catch Us</h3>
          <a href="mailto:supportdevents@gmail.com">supportdevents@gmail.com</a>
          <div className="footer-icons">
            <a href="https://www.linkedin.com/in/gowthamaraj-m-s/" target="_blank" rel="noopener noreferrer">
              <img src={Linkedin} alt="LinkedIn" />
            </a>
            <a href="https://github.com/GowthamaRaj29" target="_blank" rel="noopener noreferrer">
              <img src={Github} alt="GitHub" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=918903844107" target="_blank" rel="noopener noreferrer">
              <img src={Whatsapp} alt="WhatsApp" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
