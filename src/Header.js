// src/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>How Do I Dress Today?</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/login">Login</a>
      </nav>
    </header>
  );
};

export default Header;