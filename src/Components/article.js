import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  TextInput,
  Create,
  Filter
} from 'react-admin';

const ArticleTitle = ({ record }) => {
  //return <span>Article {record ? `"${record.title}}"` : ''}</span>;
  return <span>Articulos</span>;
};

const ArticleFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
    {/* <ReferenceInput
      label="Articulo"
      source="articleType"
      reference="articleType"
      allowEmpty
    >
      <SelectInput optionText="name" />
    </ReferenceInput> */}
  </Filter>
);

export const ArticleList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List title={<ArticleTitle />} filters={<ArticleFilter />} {...props}>
      {isSmall ? (
        <Datagrid>
          <TextField source="code" label="Código" />
          <ReferenceField
            label="Tipo Articulo"
            source="articleType"
            reference="articleType"
          >
            <TextField source="name" label="Tipo de Artículo" />
          </ReferenceField>
          <TextField source="name" label="Nombre del Artículo" />
          <TextField source="price" label="Precio" />
          <TextField source="comment" label="Comentario" />

          <EditButton />
        </Datagrid>
      ) : (
        <Datagrid>
          <TextField source="code" label="Código" />
          <ReferenceField
            label="Tipo de Articulo"
            source="articleType"
            reference="articleType"
          >
            <TextField source="name" label="Tipo de Articulo" />
          </ReferenceField>
          <TextField source="name" label="Nombre del Artículo" />
          <TextField source="price" label="Precio" />
          <TextField source="comment" label="Comentario" />

          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const ArticleEdit = props => (
  <Edit title={<ArticleTitle />} {...props}>
    <SimpleForm>
      <TextInput source="code" label="Código" />
      <ReferenceInput source="articleType" reference="articleType">
        <SelectInput optionText="name" label="Tipo de Artículo" />
      </ReferenceInput>
      <TextInput source="name" label="Nombre del Artículo" />
      <TextInput source="price" label="Precio" />
      <TextInput source="comment" label="Comentario" />
    </SimpleForm>
  </Edit>
);

export const ArticleCreate = props => (
  <Create title={<ArticleTitle />} {...props}>
    <SimpleForm>
      <TextInput source="code" label="Código" />
      <ReferenceInput
        source="articleType"
        reference="articleType"
        label="Tipo de Articulo"
      >
        <SelectInput optionText="name" label="Tipo de Artículo" />
      </ReferenceInput>
      <TextInput source="name" label="Nombre del Artículo" />
      <TextInput source="price" label="Precio" />
      <TextInput source="comment" label="Comentario" />
    </SimpleForm>
  </Create>
);
