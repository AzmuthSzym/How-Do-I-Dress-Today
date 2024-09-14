import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to "How Do I Dress Today?" App</h1>
      <p className='app-text'>
        Welcome to "How Do I Dress Today?"! This app helps you choose your daily outfit by providing personalized fashion advice. 
        Just tell us what items you have in your wardrobe, and we'll suggest what to wear. Whether you're going for a casual look, 
        a business meeting, or a night out, we've got you covered with stylish ideas. Ask for advice, get outfit suggestions, and even 
        see visualizations to help you make the best choice!
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
