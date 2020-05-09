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
  SimpleList,
  ArrayField,
  SingleFieldList,
  ChipField,
  NumberField,
  DateField,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput
} from 'react-admin';

const OrderTitle = ({ record }) => {
  return (
    <span>Orden</span>
    //<span>Tipo de articulo {record ? `"${record.title}}"` : ''}</span>
  );
};

const OrderFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

export const OrderList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List title={<OrderTitle />} filters={<OrderFilter />} {...props}>
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
          <TextField source="Nombre Cliente" />
          <TextField source="Numero Telefono" />
          <TextField source="Direccion" />
          <TextField source="Fecha Vendida" />
          <TextField source="Fecha Entrega" />
          <ArrayField source="Articulos">
            <Datagrid>
              <ChipField source="Nombre Articulo" />
              <ChipField source="Precio" />{' '}
            </Datagrid>
          </ArrayField>
          <NumberField source="Gran Total" />
          <TextField source="Estatus Entrega" />
          <TextField source="Motorista" />
          <EditButton />
        </Datagrid>
      ) : (
        <Datagrid>
          <TextField source="id" />
          <TextField source="Nombre Cliente" />
          <TextField source="Numero Telefono" />
          <TextField source="Direccion" />
          <TextField source="Fecha Vendida" />
          <TextField source="Fecha Entrega" />
          <ArrayField source="Articulos">
            <Datagrid>
              <ChipField source="Nombre Articulo" />
              <ChipField source="Precio" />
            </Datagrid>
          </ArrayField>
          <NumberField source="Gran Total" />
          <TextField source="Estatus Entrega" />
          <TextField source="Motorista" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const OrderEdit = props => (
  <Edit title={<OrderTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="Nombre Cliente" />
      <TextInput source="Numero Telefono" />
      <TextInput source="Direccion" />
      <DateInput source="Fecha Vendida" />
      <DateInput source="Fecha Entrega" />
      <ArrayInput source="Articulos">
        <SimpleFormIterator>
          <TextInput source="Nombre Articulo" />
          <TextInput source="Precio" />
        </SimpleFormIterator>
      </ArrayInput>
      <NumberInput source="Gran Total" />
      <TextInput source="Estatus Entrega" />
      <TextInput source="Motorista" />
    </SimpleForm>
  </Edit>
);

export const OrderCreate = props => (
  <Create title={<OrderTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="Nombre Cliente" />
      <TextInput source="Numero Telefono" />
      <TextInput source="Direccion" />
      <TextInput source="tipo" />
      <DateInput source="Fecha Vendida" />
      <DateInput source="Fecha Entrega" />
      <ArrayInput source="Articulos">
        <SimpleFormIterator>
          <TextInput source="Nombre Articulo" />
          <TextInput source="Precio" />
        </SimpleFormIterator>
      </ArrayInput>
      <NumberInput source="Gran Total" />
      <TextInput source="Estatus Entrega" />
      <TextInput source="Motorista" />
    </SimpleForm>
  </Create>
);
