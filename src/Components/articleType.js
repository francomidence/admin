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

const ArticleTypeTitle = ({ record }) => {
  return (
    <span>Tipos de artículos </span>
    //<span>Tipo de articulo {record ? `"${record.title}}"` : ''}</span>
  );
};

const ArticleTypeFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const ArticleTypeList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List
      title={<ArticleTypeTitle />}
      filters={<ArticleTypeFilter />}
      {...props}
    >
      {isSmall ? (
        // <SimpleList
        //   primaryText={record => record.title}
        //   secondaryText={record => `${record.views} views`}
        //   tertiaryText={record =>
        //     new Date(record.published_at).toLocaleDateString()
        //   }
        // />
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

export const ArticleTypeEdit = props => (
  <Edit title={<ArticleTypeTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="name" label="Nombre" />
    </SimpleForm>
  </Edit>
);

export const ArticleTypeCreate = props => (
  <Create title={<ArticleTypeTitle />} {...props}>
    <SimpleForm>
      <TextInput source="name" label="Nombre"></TextInput>
    </SimpleForm>
  </Create>
);
