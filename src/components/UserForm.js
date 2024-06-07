import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ROLES, USER_TYPES } from '../data/roles';

const UserForm = ({ onSubmit, initialData = {}, currentUser }) => {
  const [user, setUser] = useState({
    username: initialData.username || '',
    email: initialData.email || '',
    role: initialData.role || ROLES.PERSON,
    userType: initialData.userType || USER_TYPES.PARTNER,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUsername">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="formRole">
        <Form.Label>Rol</Form.Label>
        <Form.Control
          as="select"
          name="role"
          value={user.role}
          onChange={handleChange}
        >
          {Object.values(ROLES).map((role) => (
            (currentUser.role === ROLES.SUPER_ADMIN || role === ROLES.PERSON || role === ROLES.VOLUNTEER) && (
              <option key={role} value={role}>{role}</option>
            )
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formUserType">
        <Form.Label>Tipo de Usuario</Form.Label>
        <Form.Control
          as="select"
          name="userType"
          value={user.userType}
          onChange={handleChange}
        >
          {Object.values(USER_TYPES).map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default UserForm;
