import React from 'react';

const routes = [
  {
    path: '/raffles',
    exact: true,
    name: 'Raffles',
    component: React.lazy(() => import('../views/raffles/Raffles')),
  },
  {
    path: '/raffles/:id',
    name: 'Raffles Detail',
    component: React.lazy(() => import('../views/rafflesDetail/RafflesDetail')),
  },
];

export default routes;
