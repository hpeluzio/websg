// import React from 'react';

import Users from '../views/users/Users';
import Raffles from '../views/admin/raffles/Raffles';
import Detail from '../views/admin/rafflesDetail/RafflesDetail';

// const Users = React.lazy(() => import('../views/users/Users'));
// const Raffles = React.lazy(() => import('../views/admin/raffles/Raffles'));
// const Detail = React.lazy(() =>
//   import('../views/admin/rafflesDetail/RafflesDetail'),
// );

const routes = [
  {
    path: '/admin/users',
    name: 'Users',
    component: Users,
  },
  {
    path: '/admin/raffles',
    exact: true,
    name: 'Raffles Admin',
    component: Raffles,
  },
  {
    path: '/admin/raffles/:id',
    name: 'Raffles Detail Admin',
    component: Detail,
  },
];

export default routes;
