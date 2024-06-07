import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Animals from './Animals';
import Articles from './Articles';
import Settings from './Settings';
import Reports from './Reports';
import Messages from './Messages';
import Forms from './Forms';
import Finances from './Finances';
import Support from './Support';

const ControlPanel = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow p-4">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/animals" element={<Animals />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/finances" element={<Finances />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </div>
  );
};

export default ControlPanel;
