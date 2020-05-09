import React from 'react';
//Components
//import { Admin, Resource, ListGuesser } from 'react-admin';
import { Admin, Resource, ListGuesser } from 'react-admin';
//import { UserList } from './Components/users';
import { PostList, PostEdit, PostCreate } from './Components/posts';
import { ArticleCreate, ArticleEdit, ArticleList } from './Components/article';
import {
  ArticleTypeCreate,
  ArticleTypeEdit,
  ArticleTypeList
} from './Components/articleType';
import { ShopCreate, ShopEdit, ShopList } from './Components/shop';
import { OrderCreate, OrderEdit, OrderList } from './Components/order';

import jsonServerProvider from 'ra-data-json-server';
import './App.css';
//Icons
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListIcon from '@material-ui/icons/List';
import AssignmentIcon from '@material-ui/icons/Assignment';
import StorefrontIcon from '@material-ui/icons/Storefront';
//Utilities
import Dashboard from './Components/dashboard';
import AuthProvider from './Components/authProvider';

//import DataProvider from './Components/dataprovider';
//Language
import spanishMessages from '@blackbox-vision/ra-language-spanish';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const i18nProvider = polyglotI18nProvider(() => spanishMessages, 'es');

const dataProvider = jsonServerProvider(
  'https://my-json-server.typicode.com/francomidence/admin'
);
const App = () => (
  <Admin
    i18nProvider={i18nProvider}
    authProvider={AuthProvider}
    dashboard={Dashboard}
    dataProvider={dataProvider}
  >
    <Resource
      name="orden"
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
      name="articulo"
      list={ArticleList}
      edit={ArticleEdit}
      create={ArticleCreate}
      icon={AssignmentIcon}
    ></Resource>
    <Resource
      name="tipoArticulo"
      list={ArticleTypeList}
      edit={ArticleTypeEdit}
      create={ArticleTypeCreate}
      options={{ label: 'Tipo Articulos' }}
    ></Resource>
    <Resource
      name="tienda"
      list={ShopList}
      edit={ShopEdit}
      create={ShopCreate}
      icon={StorefrontIcon}
    ></Resource>
    <Resource name="usuario" list={ListGuesser} icon={UserIcon}></Resource>
  </Admin>
);

export default App;
