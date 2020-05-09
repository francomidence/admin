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

const ShopTitle = ({ record }) => {
  return <span>Shop {record ? `"${record.title}}"` : ''}</span>;
};

const ShopFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const ShopList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List filters={<ShopFilter />} {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={record => record.title}
          secondaryText={record => `${record.views} views`}
          tertiaryText={record =>
            new Date(record.published_at).toLocaleDateString()
          }
        />
      ) : (
        <Datagrid>
          <TextField source="id" />
          <TextField source="ubicacion" />
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
      <TextInput source="ubicacion" />
    </SimpleForm>
  </Edit>
);

export const ShopCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="ubicacion"></TextInput>
    </SimpleForm>
  </Create>
);
