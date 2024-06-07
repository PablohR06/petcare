import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SuperAdminContext = createContext();

export const SuperAdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('superadmin'));
  const navigate = useNavigate();

  const login = (email, password) => {
    if (email === 'superadmindefinitivo@gmail.com' && password === 'superadmindefinitivo135') {
      localStorage.setItem('superadmin', 'true');
      setIsAuthenticated(true);
      navigate('/dashboard');
    } else {
      throw new Error('Credenciales incorrectas');
    }
  };

  const logout = () => {
    localStorage.removeItem('superadmin');
    setIsAuthenticated(false);
    navigate('/'); // Redirige a la página de inicio después de cerrar sesión
  };

  return (
    <SuperAdminContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </SuperAdminContext.Provider>
  );
};

export const useSuperAdmin = () => useContext(SuperAdminContext);
