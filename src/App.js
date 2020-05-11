import React from 'react';
//Components
//import { Admin, Resource, ListGuesser } from 'react-admin';
import { Admin, Resource, ListGuesser } from 'react-admin';
//import { UserList } from './Components/users';
//import { PostList, PostEdit, PostCreate } from './Components/posts';
import { ArticleCreate, ArticleEdit, ArticleList } from './Components/article';
import {
  ArticleTypeCreate,
  ArticleTypeEdit,
  ArticleTypeList
} from './Components/articleType';
import { ShopCreate, ShopEdit, ShopList } from './Components/shop';
import { OrderCreate, OrderEdit, OrderList } from './Components/order';
import { DriverCreate, DriverEdit, DriverList } from './Components/driver';

//import jsonServerProvider from 'ra-data-json-server';
import './App.css';
//Icons
import UserIcon from '@material-ui/icons/Group';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AssignmentIcon from '@material-ui/icons/Assignment';
import StorefrontIcon from '@material-ui/icons/Storefront';
import MotorcycleIcon from '@material-ui/icons/Motorcycle';
//Utilities
import Dashboard from './Components/dashboard';
import AuthProvider from './Components/authProvider';

import DataProvider from './Components/dataprovider';
//Language
import spanishMessages from '@blackbox-vision/ra-language-spanish';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const i18nProvider = polyglotI18nProvider(() => spanishMessages, 'es');

// const dataProvider = jsonServerProvider(
//   'https://my-json-server.typicode.com/francomidence/admin'
// );

const App = () => (
  <Admin
    i18nProvider={i18nProvider}
    authProvider={AuthProvider}
    dashboard={Dashboard}
    dataProvider={DataProvider}
  >
    <Resource
      name="order"
      list={OrderList}
      edit={OrderEdit}
      create={OrderCreate}
      icon={ShoppingCartIcon}
      options={{ label: 'Ordenes' }}
    ></Resource>
    {/* <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    ></Resource> */}
    <Resource
      name="article"
      list={ArticleList}
      edit={ArticleEdit}
      create={ArticleCreate}
      icon={AssignmentIcon}
      options={{ label: 'Artículos' }}
    ></Resource>
    <Resource
      name="articleType"
      list={ArticleTypeList}
      edit={ArticleTypeEdit}
      create={ArticleTypeCreate}
      options={{ label: 'Tipos de Artículos' }}
    ></Resource>
    <Resource
      name="store"
      list={ShopList}
      edit={ShopEdit}
      create={ShopCreate}
      icon={StorefrontIcon}
      options={{ label: 'Local' }}
    ></Resource>
    <Resource
      name="users"
      list={ListGuesser}
      icon={UserIcon}
      options={{ label: 'Usuarios' }}
    ></Resource>
    <Resource
      name="driver"
      list={DriverList}
      edit={DriverEdit}
      create={DriverCreate}
      icon={MotorcycleIcon}
      options={{ label: 'Motoristas' }}
    ></Resource>
    <Resource name="status"></Resource>
  </Admin>
);

export default App;
