import React from 'react';
import { Table } from 'react-bootstrap';

const UserList = ({ users }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre de usuario</th>
          <th>Email</th>
          <th>Rol</th>
          <th>Tipo de Usuario</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.userType}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;
