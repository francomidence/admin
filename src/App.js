import React from 'react';
//import { Admin, Resource, ListGuesser } from 'react-admin';
import { Admin, Resource } from 'react-admin';
import { UserList } from './Components/users';
import { PostList, PostEdit, PostCreate } from './Components/posts';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Components/dashboard';
import AuthProvider from './Components/authProvider';
//import DataProvider from './Components/dataprovider';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
  <Admin
    authProvider={AuthProvider}
    dashboard={Dashboard}
    dataProvider={dataProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    ></Resource>
    <Resource name="users" list={UserList} icon={UserIcon}></Resource>
  </Admin>
);

export default App;
