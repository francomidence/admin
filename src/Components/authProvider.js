export default {
  //called when user attempts to login
  login: ({ username }) => {
    localStorage.setItem('username', username);
    //accepts all username/password combinations
    return Promise.resolve();
  },
  //called when user attempts to logout
  logout: () => {
    localStorage.removeItem('username');
    return Promise.resolve();
  },
  //called when API returns an error
  checkError: ({ status }) => {
    if (status === 401 || status === 403) {
      localStorage.removeItem('username');
      return Promise.reject();
    }
    return Promise.resolve();
  },
  //called when user navigates to a new location, to check for authentication
  checkAuth: () => {
    return localStorage.getItem('username')
      ? Promise.resolve()
      : Promise.reject();
  },
  //called when user navigates to a new location, check for permission/roles
  getPermissions: () => Promise.resolve()
};
