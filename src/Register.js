import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Register.css';

const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>/?[\]|\\~`])[A-Za-z\d!@#$%^&*()\-_=+{};:,<.>/?[\]|\\~`]{8,}$/;

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.');
      return;
    }    
    try {
      const response = await axios.post('http://localhost:5000/api/register', { username, email, password });
      console.log(response.data.message);
      setSuccessMessage(response.data.message);
      setErrorMessage('');
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/login')
      // Handle successful registration (e.g., redirect to login page)
    } catch (error) {
      console.error('Registration error:', error.response.data.error);
      setErrorMessage(error.response?.data?.error || 'Registration failed. Please try again.');
      setSuccessMessage('');      
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="register-input-group">
          <label>Username:</label>
          <input 
            type="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>        
        <div className="register-input-group">
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="register-input-group">
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => { 
              setPassword(e.target.value); 
              setPasswordError('');
            }}
            required 
          />
          {passwordError && <p className="register-error-message">{passwordError}</p>}
        </div>
        <button className="register-button" type="submit">Register</button>
      </form>
      {successMessage && <p className="register-success-message">{successMessage}</p>}
      {errorMessage && <p className="register-error-message">{errorMessage}</p>}
    </div>
  );
}

export default Register;
