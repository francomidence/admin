import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import MyUrlField from './MyUrlField';

export const UserList = props => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" label="Nombre de Usuario" />
      {/* <TextField source="username" label="Usuario" /> */}
      {/* <EmailField source="email" label="Correo Electronico" /> */}
      {/* <TextField source="address.street" label="Direccion" /> */}
      {/* <TextField source="phone" label="Telefono" /> */}
      {/* <MyUrlField source="website" label="Website" /> */}
      {/* <TextField source="company.name" label="Compania" /> */}
    </Datagrid>
  </List>
);
