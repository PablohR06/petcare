import React from 'react';
import { Link } from 'react-router-dom';
import GeneralInfoSidebar from './GeneralInfoSidebar';
import AnimalSidebar from './AnimalSidebar';
import SearchSidebar from './SearchSidebar';
import HelpSidebar from './HelpSidebar';
import AnimalList from './AnimalList';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      <header className="bg-yellow-400 text-white py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Salvando Vidas</h1>
          <div>
            <Link to="/Login" className="text-black mx-2">Iniciar Sesión</Link>
            <Link to="/Register" className="text-black">Registrarse</Link>
          </div>
        </div>
      </header>
      
      <div className="flex mt-4">
        <div className="w-1/5">
          <GeneralInfoSidebar />
          <AnimalSidebar />
          <SearchSidebar />
        </div>
        
        <div className="w-3/5 mx-4">
          <h2 className="font-bold mb-4">Listado de animales</h2>
          <AnimalList />
        </div>
        
        <div className="w-1/5">
          <HelpSidebar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
