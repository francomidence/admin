import React from 'react';
//import { Admin, Resource, ListGuesser } from 'react-admin';
import { Admin, Resource, ListGuesser } from 'react-admin';
import { UserList } from './Components/users';
import { PostList, PostEdit, PostCreate } from './Components/posts';
import jsonServerProvider from 'ra-data-json-server';
import './App.css';
//Icons
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
import ListIcon from '@material-ui/icons/List';
//Components
import Dashboard from './Components/dashboard';
import AuthProvider from './Components/authProvider';
//import DataProvider from './Components/dataprovider';

const dataProvider = jsonServerProvider(
  'http://my-json-server.typicode.com/francomidence/admin'
);
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
    <Resource name="usuario" list={ListGuesser} icon={UserIcon}></Resource>
    <Resource name="articulo" list={ListGuesser} icon={ListIcon}></Resource>
    <Resource
      name="motorista"
      list={ListGuesser}
      icon={MotorcycleIcon}
    ></Resource>
    <Resource
      name="orden"
      list={ListGuesser}
      icon={ShoppingCartIcon}
    ></Resource>
  </Admin>
);

export default App;
