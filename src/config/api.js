import axios from 'axios';

import store from 'src/redux/store';

var instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // baseURL: 'http://127.0.0.1:3333',
  timeout: 25000,
});

instance.defaults.headers['Content-Type'] = 'application/json';

instance.interceptors.request.use(
  async config => {
    const state = store.getState();
    const token = await state.session.token;

    if (token) {
      config.headers.Authorization = `bearer ${await state.session.token}`;
    }

    return config;
  },
  async error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    return Promise.reject(error);
  },
);

export default instance;
