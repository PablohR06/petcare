import React, { useState } from 'react';
import { useSuperAdmin } from '../SuperAdminContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useSuperAdmin();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      login(email, password);
      navigate('/dashboard');
    } catch (error) {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Iniciar Sesión</button>
          <p className="mt-4">
            ¿No tienes cuenta? <a href="/register" className="text-blue-500">Regístrate aquí</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
