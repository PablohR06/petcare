import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ControlPanel from './components/Dashboard/ControlPanel';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';
import { SuperAdminProvider } from './SuperAdminContext';

const App = () => {
  return (
    <Router>
      <SuperAdminProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard/*" element={<ControlPanel />} />
        </Routes>
      </SuperAdminProvider>
    </Router>
  );
};

export default App;
