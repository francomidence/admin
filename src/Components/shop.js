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

const ShopTitle = ({ record }) => {
  //return <span>Shop {record ? `"${record.title}}"` : ''}</span>;
  return <span>Locales </span>;
};

const ShopFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const ShopList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List title={<ShopTitle />} filters={<ShopFilter />} {...props}>
      {isSmall ? (
        <Datagrid>
          {/* <TextField source="id" /> */}
          <TextField source="name" label="Nombre" />
          <EditButton />
        </Datagrid>
      ) : (
        <Datagrid>
          {/* <TextField source="id" /> */}
          <TextField source="name" label="Nombre" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const ShopEdit = props => (
  <Edit title={<ShopTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" label="Nombre" />
    </SimpleForm>
  </Edit>
);

export const ShopCreate = props => (
  <Create title={<ShopTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" label="Nombre"></TextInput>
    </SimpleForm>
  </Create>
);
