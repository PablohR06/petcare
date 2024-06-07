import React from 'react';

const SearchSidebar = () => {
  return (
    <div className="mb-4">
      <h2 className="font-bold mb-2">Buscador de animales</h2>
      <form>
        <input type="text" placeholder="Nombre" className="mb-2 p-2 w-full border" />
        <select className="mb-2 p-2 w-full border">
          <option>Perro</option>
          <option>Gato</option>
        </select>
        <select className="mb-2 p-2 w-full border">
          <option>En adopción</option>
          <option>Adoptado</option>
        </select>
        <button className="bg-blue-500 text-white p-2 w-full">Buscar</button>
      </form>
    </div>
  );
};

export default SearchSidebar;
