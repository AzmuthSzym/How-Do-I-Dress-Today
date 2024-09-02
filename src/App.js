import React from 'react';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Register from './Register';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Header from './Header';
import Footer from './Footer';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
