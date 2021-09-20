import React from 'react';

const routes = [
  { path: '/', exact: true, name: '' },
  {
    path: '/home',
    name: 'Home',
    component: React.lazy(() => import('../views/home/Home')),
  },
  {
    path: '/blog',
    name: 'Blog',
    component: React.lazy(() => import('../views/blog/Blog')),
  },
  {
    path: '/login',
    name: 'Login',
    component: React.lazy(() => import('../views/login/Login')),
  },
];

export default routes;
