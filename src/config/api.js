import axios from 'axios';

import store from 'src/redux/store';
import { setLoading } from 'src/redux/actions/layout/layoutActions';
import { setLayoutSideBarShow } from 'src/redux/actions/layout/layoutActions';

var instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // baseURL: 'http://127.0.0.1:3333',
  timeout: 25000,
});

instance.defaults.headers['Content-Type'] = 'application/json';

instance.interceptors.request.use(
  async config => {
    // Loading to true
    store.dispatch(setLoading({ loading: true }));

    const state = store.getState();
    const token = await state.session.token;

    if (token) {
      config.headers.Authorization = `bearer ${await state.session.token}`;
    }

    return config;
  },
  async error => {
    // Loading to false
    store.dispatch(setLoading({ loading: false }));
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async response => {
    // Loading to false
    store.dispatch(setLoading({ loading: false }));

    return response;
  },
  async error => {
    // Loading to false
    store.dispatch(setLoading({ loading: false }));
    return Promise.reject(error);
  },
);

export default instance;
