import { fetchUtils } from 'react-admin';
import { stringify } from 'query-string';

const apiUrl = 'http://localhost:5000/api';
const httpClient = fetchUtils.fetchJson;

export default {
  getList: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(params.filter)
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    console.log('Hola de GET LIST');

    console.log(url);

    return httpClient(url).then(({ headers, json }) => {
      // console.log(headers);
      // console.log(JSON.stringify(json));

      return {
        data: json,
        total: json.length
        // total: parseInt(
        //   headers
        //     .get('content-range')
        //     .split('/')
        //     .pop(),
        //   10
        // )
      };
    });
  },

  getOne: (resource, params) => {
    console.log('Hola de GET ONE');
    console.log(params);

    return httpClient(`${apiUrl}/${resource}/${params.id}`).then(
      ({ json }) => ({
        data: json
      })
    );
  },

  getMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;
    return httpClient(url).then(({ json }) => ({ data: json }));
  },

  getManyReference: (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify({
        ...params.filter,
        [params.target]: params.id
      })
    };
    const url = `${apiUrl}/${resource}?${stringify(query)}`;

    return httpClient(url).then(({ headers, json }) => ({
      data: json,
      total: parseInt(
        headers
          .get('content-range')
          .split('/')
          .pop(),
        10
      )
    }));
  },

  update: (resource, params) => {
    console.log('Hola de UPDATE');
    console.log(params);
    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'PUT',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json }));
  },

  updateMany: (resource, params) => {
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
      method: 'PUT',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json }));
  },

  create: (resource, params) =>
    httpClient(`${apiUrl}/${resource}`, {
      method: 'POST',
      body: JSON.stringify(params.data)
    }).then(({ json }) => ({
      data: { ...params.data, id: json.id }
    })),

  delete: (resource, params) => {
    console.log('Hello from DELETE one');

    return httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: 'DELETE'
    }).then(({ json }) => ({ data: json }));
  },

  deleteMany: (resource, params) => {
    console.log('Hello from DELETE MANY');
    let ids = params.ids.join(',');
    const query = {
      filter: JSON.stringify({ id: params.ids })
    };
    // console.log(JSON.stringify(query));
    console.log('soy del delete many data provider');

    return httpClient(`${apiUrl}/${resource}/${ids}`, {
      method: 'DELETE'
      // method: 'DELETE',
      // body: JSON.stringify(params.data)
    }).then(({ json }) => ({ data: json }));
  }
};
