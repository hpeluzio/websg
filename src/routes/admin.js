import React from 'react';

const routes = [
  // Admin routes
  {
    path: '/admin/users',
    name: 'Users',
    component: React.lazy(() => import('../views/users/Users')),
  },
  {
    path: '/admin/raffles',
    exact: true,
    name: 'Raffles Admin',
    component: React.lazy(() => import('../views/admin/raffles/Raffles')),
  },
  {
    path: '/admin/raffles/:id',
    name: 'Raffles Detail Admin',
    component: React.lazy(() =>
      import('../views/admin/rafflesDetail/RafflesDetail'),
    ),
  },
];

export default routes;
