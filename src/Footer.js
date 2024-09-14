// src/Footer.js
import React from 'react';
import './Footer.css';

import emailIcon from "./img/email.png";
import addressIcon from "./img/postal-address.png";
import phoneIcon from "./img/phone-flip.png";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 How Do I Dress Today?</p>
      <div className="footer-contact">
        <p>Contact Us: Some Street in a City 3/8</p>
        <p>Email: contact@fashionapp.com</p>
        <p>Phone: +123 456 789</p>
      </div>
      <div className="footer-icons">
        <img src={emailIcon} alt="Email" />
        <img src={phoneIcon} alt="Phone" />
        <img src={addressIcon} alt="Address" />
      </div>
    </footer>
  );
};

export default Footer;