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

import jsonServerProvider from 'ra-data-json-server';
import './App.css';
//Icons
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ListIcon from '@material-ui/icons/List';
//Utilities
import Dashboard from './Components/dashboard';
import AuthProvider from './Components/authProvider';
//import DataProvider from './Components/dataprovider';
//Language
import spanishMessages from '@blackbox-vision/ra-language-spanish';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const i18nProvider = polyglotI18nProvider(() => spanishMessages, 'es');

const dataProvider = jsonServerProvider(
  'http://my-json-server.typicode.com/francomidence/admin'
);
const App = () => (
  <Admin
    i18nProvider={i18nProvider}
    authProvider={AuthProvider}
    dashboard={Dashboard}
    dataProvider={dataProvider}
  >
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
      icon={ListIcon}
    ></Resource>
    <Resource name="usuario" list={ListGuesser} icon={UserIcon}></Resource>
    <Resource name="articulo" list={ListGuesser} icon={ListIcon}></Resource>
    <Resource
      name="tipoArticulo"
      list={ArticleTypeList}
      edit={ArticleTypeEdit}
      create={ArticleTypeCreate}
    ></Resource>
    <Resource
      name="tienda"
      list={ShopList}
      edit={ShopEdit}
      create={ShopCreate}
    ></Resource>
    <Resource
      name="orden"
      list={ListGuesser}
      icon={ShoppingCartIcon}
    ></Resource>
  </Admin>
);

export default App;
