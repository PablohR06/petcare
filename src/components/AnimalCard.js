import React from 'react';
import { Card, Button } from 'react-bootstrap';

const calculateAge = (birthDate) => {
  const birth = new Date(birthDate);
  const today = new Date();
  const diff = today - birth;
  const ageInDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (ageInDays < 30) {
    return `${ageInDays} días`;
  } else if (ageInDays < 365) {
    return `${Math.floor(ageInDays / 30)} meses`;
  } else {
    return `${Math.floor(ageInDays / 365)} años`;
  }
};

const AnimalCard = ({ animal }) => {
  const age = calculateAge(animal.birthDate);

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={animal.photo} />
      <Card.Body>
        <Card.Title>{animal.name}</Card.Title>
        <Card.Text>
          <strong>Género:</strong> {animal.sex}<br />
          <strong>Edad:</strong> {age}<br />
          <strong>Status:</strong> {animal.status}
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
};

export default AnimalCard;