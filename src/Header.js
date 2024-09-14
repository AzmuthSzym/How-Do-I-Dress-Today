// src/Header.js
import React from 'react';
import './Header.css';

import homeIcon from "./img/home.png";
import dashboardIcon from "./img/edit-message.png";
import loginIcon from "./img/sign-in-alt.png";

const Header = () => {
  return (
    <header className="header">
      <h1>How Do I Dress Today?</h1>
      <nav>
        <a href="/">
          <img src={homeIcon} alt="Home" className="nav-icon" />
          Home
        </a>
        <a href="/dashboard">
          <img src={dashboardIcon} alt="Dashboard" className="nav-icon" />
          Dashboard
        </a>
        <a href="/login">
          <img src={loginIcon} alt="Login" className="nav-icon" />
          Login
        </a>
      </nav>
    </header>
  );
};

export default Header;