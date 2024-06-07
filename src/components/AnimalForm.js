import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AnimalForm = ({ onSubmit, initialData = {} }) => {
  const [animal, setAnimal] = useState({
    name: initialData.name || '',
    birthDate: initialData.birthDate || '',
    sex: initialData.sex || 'macho',
    status: initialData.status || 'en adopcion',
    size: initialData.size || '',
    weight: initialData.weight || '',
    photo: initialData.photo || '',
    comment: initialData.comment || '',
    sterilizationStatus: initialData.sterilizationStatus || 'no',
    chipStatus: initialData.chipStatus || 'no',
    healthStatus: initialData.healthStatus || 'bueno',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setAnimal({
      ...animal,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(animal);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Nombre del Animal</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={animal.name}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formBirthDate">
        <Form.Label>Fecha de Nacimiento</Form.Label>
        <Form.Control
          type="date"
          name="birthDate"
          value={animal.birthDate}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formSex">
        <Form.Label>Sexo del Animal</Form.Label>
        <Form.Control
          as="select"
          name="sex"
          value={animal.sex}
          onChange={handleChange}
        >
          <option value="macho">Macho</option>
          <option value="hembra">Hembra</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formStatus">
        <Form.Label>Estado del Animal</Form.Label>
        <Form.Control
          as="select"
          name="status"
          value={animal.status}
          onChange={handleChange}
        >
          <option value="en adopcion">En adopción</option>
          <option value="reservado">Reservado</option>
          <option value="adoptado">Adoptado</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formSize">
        <Form.Label>Tamaño</Form.Label>
        <Form.Control
          type="text"
          name="size"
          value={animal.size}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formWeight">
        <Form.Label>Peso</Form.Label>
        <Form.Control
          type="text"
          name="weight"
          value={animal.weight}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formPhoto">
        <Form.Label>Foto del Animal</Form.Label>
        <Form.Control
          type="file"
          name="photo"
          onChange={(e) => setAnimal({ ...animal, photo: URL.createObjectURL(e.target.files[0]) })}
        />
      </Form.Group>
      <Form.Group controlId="formComment">
        <Form.Label>Comentarios</Form.Label>
        <Form.Control
          as="textarea"
          name="comment"
          value={animal.comment}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formSterilizationStatus">
        <Form.Check
          type="checkbox"
          label="Esterilizado"
          name="sterilizationStatus"
          checked={animal.sterilizationStatus}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formChipStatus">
        <Form.Check
          type="checkbox"
          label="Con chip"
          name="chipStatus"
          checked={animal.chipStatus}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formHealthStatus">
        <Form.Label>Estado de Salud</Form.Label>
        <Form.Control
          as="select"
          name="healthStatus"
          value={animal.healthStatus}
          onChange={handleChange}
        >
          <option value="bueno">Bueno</option>
          <option value="malo">Malo</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default AnimalForm;
