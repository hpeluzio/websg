// import React from 'react';

import Home from '../views/home/Home';
import Blog from '../views/blog/Blog';
import Login from '../views/pages/login/Login';

// const Home = React.lazy(() => import('../views/home/Home'));
// const Blog = React.lazy(() => import('../views/blog/Blog'));
// const Login = React.lazy(() => import('../views/login/Login'));

const routes = [
  { path: '/', exact: true, name: '' },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/blog',
  //   name: 'Blog',
  //   component: Blog,
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

export default routes;
