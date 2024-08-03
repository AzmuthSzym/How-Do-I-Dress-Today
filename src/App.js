import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Register from './Register';
import Home from './Home';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
