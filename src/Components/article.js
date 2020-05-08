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
  Filter,
  SimpleList,
  RadioButtonGroupInput
} from 'react-admin';

const ArticleTitle = ({ record }) => {
  return <span>Article {record ? `"${record.title}}"` : ''}</span>;
};

const ArticleFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput
      label="articulo"
      source="id"
      reference="tipo articulo"
      allowEmpty
    >
      <SelectInput optionText="Nombre Articulo" />
    </ReferenceInput>
  </Filter>
);

export const ArticleList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List filters={<ArticleFilter />} {...props}>
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
          <TextField source="Tipo Articulo" />
          <TextField source="Precio" />
          <TextField source="Talla" />
          <TextField source="Nombre Articulo" />
          <TextField source="Comentarios" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const ArticleEdit = props => (
  <Edit title={<ArticleTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <RadioButtonGroupInput
        source="tipo articulo"
        choices={[
          { id: 'programming', name: 'Programming' },
          { id: 'lifestyle', name: 'Lifestyle' },
          { id: 'photography', name: 'Photography' }
        ]}
      />
      <TextInput source="Precio" />
      <TextInput source="Talla" />
      <TextInput source="Nombre Articulo" />
      <TextInput multiline source="Comentarios"></TextInput>
    </SimpleForm>
  </Edit>
);

export const ArticleCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="id" reference="tipo articulo">
        <SelectInput optionText="Tipo Articulo"></SelectInput>
      </ReferenceInput>
      <TextInput source="Precio"></TextInput>
      <TextInput source="Talla"></TextInput>
      <TextInput source="Nombre Articulo"></TextInput>
      <TextInput multiline source="Comentarios"></TextInput>
    </SimpleForm>
  </Create>
);