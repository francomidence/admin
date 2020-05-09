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
  Filter,
  SimpleList
} from 'react-admin';

const DriverTitle = ({ record }) => {
  return (
    <span>Motorista </span>
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
        // <SimpleList
        //   primaryText={record => record.title}
        //   secondaryText={record => `${record.views} views`}
        //   tertiaryText={record =>
        //     new Date(record.published_at).toLocaleDateString()
        //   }
        // />
        <Datagrid>
          <TextField source="id" />
          <TextField source="nombre" />
          <EditButton />
        </Datagrid>
      ) : (
        <Datagrid>
          <TextField source="id" />
          <TextField source="nombre" />
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
      <TextInput source="nombre" />
    </SimpleForm>
  </Edit>
);

export const DriverCreate = props => (
  <Create title={<DriverTitle />} {...props}>
    <SimpleForm>
      <TextInput source="nombre"></TextInput>
    </SimpleForm>
  </Create>
);
