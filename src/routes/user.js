// import React from 'react';

import Raffles from '../views/raffles/Raffles';
import Detail from '../views/rafflesDetail/RafflesDetail';

// const Raffles = React.lazy(() => import('../views/raffles/Raffles'));
// const Detail = React.lazy(() => import('../views/rafflesDetail/RafflesDetail'));

const routes = [
  {
    path: '/raffles',
    exact: true,
    name: 'Raffles',
    component: Raffles,
  },
  {
    path: '/raffles/:id',
    name: 'Raffles Detail',
    component: Detail,
  },
];

export default routes;
