import React from 'react';
import './Animals.css';

const Animals = () => {
  const animals = [
    { name: 'Abby', type: 'Gato', gender: 'Hembra', status: 'Adoptado' },
    { name: 'Abel', type: 'Perro', gender: 'Macho', status: 'En adopción' },
    // Agrega más animales según sea necesario
  ];

  return (
    <div>
      <h2>Listado de Animales</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Sexo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {animals.map((animal, index) => (
            <tr key={index}>
              <td><img src={`path/to/${animal.name.toLowerCase()}.jpg`} alt={animal.name} width="50" height="50" /></td>
              <td>{animal.name}</td>
              <td>{animal.type}</td>
              <td>{animal.gender}</td>
              <td>{animal.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Animals;
