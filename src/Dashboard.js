import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css'; // Assuming you have styles for the Dashboard

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState(localStorage.getItem('username')); // From localStorage
  const [messages, setMessages] = useState([]); // Array to store chat history
  const [input, setInput] = useState(''); // User input
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Handle Logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
  };

  // Handle sending message
  const handleSendMessage = async (e) => {
    e.preventDefault();
  
    if (!input.trim()) return; // Prevent sending empty messages
  
    const userMessage = { role: 'user', content: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]); // Add user message to chat history
    setInput(''); // Clear input
  
    setIsLoading(true);
  
    try {
      const response = await axios.post('http://localhost:5000/api/chat', { message: input });
      const botMessage = { role: 'assistant', content: response.data.response };
  
      // Add the assistant (ChatGPT) response to the chat
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error while sending message:', error); // Log error details
      const errorMessage = { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };  

  return (
    <div className="dashboard">
      <h2>Welcome, {username}!</h2>
      <button onClick={handleLogout}>Logout</button>

      <div className="chat-container">
        <div className="messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={msg.role === 'user' ? 'user-message' : 'bot-message'}
            >
              {msg.content}
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="chat-form">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
