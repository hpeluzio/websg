import React from 'react';

const routes = [
  { path: '/', exact: true, name: 'Home' },
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
];

export default routes;
