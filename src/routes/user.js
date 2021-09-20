import React from 'react';

const routes = [
  { path: '/', exact: true, name: 'Home' },
  {
    path: '/home',
    name: 'Home',
    component: React.lazy(() => import('../views/home/Home')),
  },
  {
    path: '/raffles',
    exact: true,
    name: 'Raffles',
    component: React.lazy(() => import('..//views/raffles/Raffles')),
  },
  {
    path: '/raffles/:id',
    name: 'Raffles Detail',
    component: React.lazy(() => import('../views/rafflesDetail/RafflesDetail')),
  },
];

export default routes;
