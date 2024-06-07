import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

const AnimalList = () => {
  const animals = [
    { name: 'Aqua', gender: 'Hembra', birthDate: '2021-01-15', status: 'En adopción', photo: 'path/to/photo1.jpg' },
    { name: 'Aries', gender: 'Macho', birthDate: '2020-05-10', status: 'En adopción', photo: 'path/to/photo2.jpg' },
    { name: 'Baileys', gender: 'Hembra', birthDate: '2019-03-22', status: 'En adopción', photo: 'path/to/photo3.jpg' },
    // Agrega más animales según sea necesario
  ];

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

  return (
    <div>
      <h2>Listado de animales</h2>
      <Row>
        {animals.map((animal, index) => (
          <Col key={index} sm={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={animal.photo} />
              <Card.Body>
                <Card.Title>{animal.name}</Card.Title>
                <Card.Text>
                  <strong>Género:</strong> {animal.gender}<br />
                  <strong>Edad:</strong> {calculateAge(animal.birthDate)}<br />
                  <strong>Status:</strong> {animal.status}
                </Card.Text>
                <Button variant="primary">Ver más</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AnimalList;
