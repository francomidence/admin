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
  ArrayField,
  ChipField,
  NumberField,
  DateInput,
  ArrayInput,
  SimpleFormIterator,
  NumberInput,
  DateField,
  ReferenceField,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
  AutocompleteInput
} from 'react-admin';
let precio = 0;
const OrderTitle = ({ record }) => {
  return (
    <span>Ordenes</span>
    //<span>Tipo de articulo {record ? `"${record.title}}"` : ''}</span>
  );
};

const OrderFilter = props => (
  <Filter {...props}>
    <TextInput label="Buscar" source="q" alwaysOn />
  </Filter>
);

const TotalField = ({ source, record = {} }) => {
  let total = 0;

  if (record) {
    if (record.articles) {
      record.articles.forEach(article => {
        let subTotal = article.price * article.quantity;
        console.log('article de component order.js', article);
        console.log('El articulo es', article.name);
        total += subTotal;
      });
    }
    return <span>{total}</span>;
  }
};

export const OrderList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  // console.log(`Soy props de LIST`, props);

  return (
    <List title={<OrderTitle />} filters={<OrderFilter />} {...props}>
      {isSmall ? (
        <Datagrid>
          {/* <TextField source="id" /> */}
          <TextField source="code" label="Código" />
          <TextField source="customer" label="Cliente" />
          <TextField source="phone" label="Teléfono" />
          <TextField source="address" label="Dirección" />
          <DateField source="soldDate" label="Fecha de Venta" />
          <DateField source="deliverDate" label="Fecha de Entrega" />
          <ArrayField source="articles">
            <Datagrid>
              <ChipField source="quantity" />
              <ReferenceField
                label="Producto"
                source="name"
                reference="article"
              >
                <TextField source="name" />
              </ReferenceField>
              <ReferenceField label="Precio" source="name" reference="article">
                <TextField source="price" />
              </ReferenceField>
              <ChipField source="comments" />
            </Datagrid>
          </ArrayField>
          <TotalField></TotalField>
          <ReferenceField label="Tienda" source="store" reference="store">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField
            label="Estado de Entrega"
            source="status"
            reference="status"
          >
            <TextField source="status" />
          </ReferenceField>
          <ReferenceField label="Motorista" source="driver" reference="driver">
            <TextField source="name" />
          </ReferenceField>

          <ReferenceField
            label="Estado de Entrega"
            source="status"
            reference="status"
          >
            <TextField source="status" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      ) : (
        <Datagrid>
          {/* <TextField source="id" /> */}
          <TextField source="code" label="Código" />
          <TextField source="customer" label="Cliente" />
          <TextField source="phone" label="Teléfono" />
          <TextField source="address" label="Dirección" />
          <DateField source="soldDate" label="Fecha de Venta" />
          <DateField source="deliverDate" label="Fecha de Entrega" />
          <ArrayField source="articles" label="Artículos">
            <Datagrid>
              <ChipField source="quantity" label="Cantidad" />
              <ReferenceField
                label="Producto"
                source="name"
                reference="article"
              >
                <TextField source="name" />
              </ReferenceField>
              <ReferenceField label="Precio" source="name" reference="article">
                <TextField source="price" />
              </ReferenceField>
              <ChipField source="comments" label="Comentarios" />
            </Datagrid>
          </ArrayField>
          <TotalField></TotalField>
          <ReferenceField label="Tienda" source="store" reference="store">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField label="Motorista" source="driver" reference="driver">
            <TextField source="name" />
          </ReferenceField>
          <ReferenceField
            label="Estado de Entrega"
            source="status"
            reference="status"
          >
            <TextField source="status" />
          </ReferenceField>
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const OrderEdit = props => {
  // console.log(`Soy props de EDIT`, props);

  return (
    <Edit title={<OrderTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="code" label="Código" />
        <TextInput source="customer" label="Cliente" />
        <TextInput source="phone" label="Teléfono" />
        <TextInput source="address" label="Dirección" />
        <DateInput source="soldDate" label="Fecha de Venta" />
        <DateInput source="deliverDate" label="Fecha de Entrega" />

        <ArrayInput source="articles" label="Artículos">
          <SimpleFormIterator>
            <NumberInput source="quantity" label="Cantidad" />

            <ReferenceInput source="name" reference="article" label="Artículo">
              <SelectInput optionText="name" label="Artículo" />
            </ReferenceInput>

            <ReferenceInput source="name" reference="article" label="Precio">
              <SelectInput optionText="price" label="Precio" />
            </ReferenceInput>

            <TextInput label="Precio" source="price" />

            <TextInput source="comments" label="Comentarios" />
          </SimpleFormIterator>
        </ArrayInput>

        <ReferenceInput source="store" reference="store" label="Local">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput source="driver" reference="driver" label="Motorista">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput
          source="status"
          reference="status"
          label="Estado de Entrega"
        >
          <SelectInput optionText="status" />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

export const OrderCreate = props => {
  // console.log(`Soy props de CREATE`, props);

  return (
    <Create title={<OrderTitle />} {...props}>
      <SimpleForm>
        <TextInput source="code" label="Código" />
        <TextInput source="customer" label="Cliente" />
        <TextInput source="phone" label="Teléfono" />
        <TextInput source="address" label="Dirección" />
        <DateInput source="soldDate" label="Fecha de Venta" />
        <DateInput source="deliverDate" label="Fecha de Entrega" />

        <ArrayInput source="articles" label="Artículos">
          <SimpleFormIterator>
            <NumberInput source="quantity" label="Cantidad" />

            <ReferenceInput source="name" reference="article" label="Artículo">
              <SelectInput optionText="name" label="Artículo" />
            </ReferenceInput>

            <ReferenceInput source="name" reference="article" label="Precio">
              <SelectInput optionText="price" label="Precio" />
            </ReferenceInput>

            <TextInput label="Precio" source="price" />

            <TextInput source="comments" label="Comentarios" />
          </SimpleFormIterator>
        </ArrayInput>

        <ReferenceInput source="store" reference="store" label="Local">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput source="driver" reference="driver" label="Motorista">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput
          source="status"
          reference="status"
          label="Estado de Entrega"
        >
          <SelectInput optionText="status" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
