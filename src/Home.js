import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to "How Do I Dress Today App?"</h1>
      <p className='app-text'>
        Struggling to decide what to wear? Our app helps you create the perfect outfit
        combinations effortlessly. Simply tell us what items you have in your wardrobe, and our AI
        will suggest stylish outfits for any occasion. Register now to explore personalized fashion
        advice, outfit visualizations, and more!
      </p>
      <Link to="/register">
        <button className="register-button button">Register Now</button>
      </Link>
      <Link to="/login">
        <button className="login-button button">Log In</button>
      </Link>      
    </div>
  );
}

export default Home;
