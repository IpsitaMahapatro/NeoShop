import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Chatbot from './features/Chatbot';
import PrivateRoute from './routes/PrivateRoute';
import ARModal from './features/ARModal';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
      </Routes>
      <Chatbot />
      <ARModal />
    </div>
  );
}

export default App;