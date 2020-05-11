import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Edit,
  SimpleForm,
  TextInput,
  Create,
  Filter
} from 'react-admin';

const DriverTitle = ({ record }) => {
  return (
    <span>Motoristas </span>
    //<span>Tipo de articulo {record ? `"${record.title}}"` : ''}</span>
  );
};

const DriverFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const DriverList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List title={<DriverTitle />} filters={<DriverFilter />} {...props}>
      {isSmall ? (
        <Datagrid>
          {/* <TextField source="id" /> */}
          <TextField source="name" label="Nombre" />
          <TextField source="phone" label="Telefono" />

          <EditButton />
        </Datagrid>
      ) : (
        <Datagrid>
          {/* <TextField source="id" /> */}
          <TextField source="name" label="Nombre" />
          <TextField source="phone" label="Telefono" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const DriverEdit = props => (
  <Edit title={<DriverTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" label="Nombre" />
      <TextInput source="phone" label="Telefono" />
    </SimpleForm>
  </Edit>
);

export const DriverCreate = props => (
  <Create title={<DriverTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" label="Nombre"></TextInput>
      <TextInput source="phone" label="Telefono"></TextInput>
    </SimpleForm>
  </Create>
);
