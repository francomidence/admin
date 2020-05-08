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
  SimpleList
} from 'react-admin';

const PostTitle = ({ record }) => {
  return <span>Post {record ? `"${record.title}}"` : ''}</span>;
};

const PostFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const PostList = props => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List filters={<PostFilter />} {...props}>
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
          <ReferenceField label="User" source="userId" reference="users">
            <TextField source="name" />
          </ReferenceField>
          <TextField source="title" />
          <TextField source="body" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

// export const PostList = props => (
//   <List filters={<PostFilter />} {...props}>
//     <Datagrid>
//       <TextField source="id"></TextField>
//       <ReferenceField source="userId" reference="users">
//         <TextField source="name"></TextField>
//       </ReferenceField>
//       <TextField source="title"></TextField>
//       {/* From a UX point of view, fields containing large chunks of text should not appear in a Datagrid, only in detail views. */}
//       {/* <TextField source="body"></TextField> */}
//       <EditButton></EditButton>
//     </Datagrid>
//   </List>
// );

// export const PostList = props => (
//   <List {...props}>
//     <SimpleList
//       primaryText={record => record.title}
//       secondaryText={record => `${record.views} views`}
//       tertiaryText={record =>
//         new Date(record.published_at).toLocaleDateString()
//       }
//     ></SimpleList>
//   </List>
// );

export const PostEdit = props => (
  <Edit title={<PostTitle />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="title" />
      <TextInput multiline source="body"></TextInput>
    </SimpleForm>
  </Edit>
);

export const PostCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name"></SelectInput>
      </ReferenceInput>
      <TextInput source="title"></TextInput>
      <TextInput multiline source="body"></TextInput>
    </SimpleForm>
  </Create>
);
