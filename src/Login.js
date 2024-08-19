import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Use useNavigate for redirection
import './Login.css';  // Import the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
  
      if (response.data.token) {
        // Save the token and username in localStorage
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
  
        // Redirect to the dashboard
        navigate('/dashboard');
      } else {
        setErrorMessage('Invalid login. Please try again.');
      }
    } catch (error) {
      setErrorMessage(error.response?.data?.error || 'Login failed. Please check your credentials.');
    }
  };  
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="login-input-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="login-input-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
      {errorMessage && <p className="login-error-message">{errorMessage}</p>}
    </div>
  );
}

export default Login;
