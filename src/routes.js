import React from 'react';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  {
    path: '/home',
    name: 'Home',
    component: React.lazy(() => import('./views/home/Home')),
  },
  {
    path: '/raffles',
    exact: true,
    name: 'Raffles',
    component: React.lazy(() => import('./views/raffles/Raffles')),
  },
  {
    path: '/raffles/:id',
    name: 'Raffles Detail',
    component: React.lazy(() => import('./views/rafflesDetail/RafflesDetail')),
  },
  // Admin routes
  {
    path: '/admin/users',
    name: 'Users',
    component: React.lazy(() => import('./views/users/Users')),
  },
  {
    path: '/admin/raffles',
    exact: true,
    name: 'Raffles Admin',
    component: React.lazy(() => import('./views/admin/raffles/Raffles')),
  },
  {
    path: '/admin/raffles/:id',
    name: 'Raffles Detail Admin',
    component: React.lazy(() =>
      import('./views/admin/rafflesDetail/RafflesDetail'),
    ),
  },
];

export default routes;
