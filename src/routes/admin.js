// import React from 'react';

import Users from '../views/users/Users';
import Raffles from '../views/admin/raffles/Raffles';
import Detail from '../views/admin/rafflesDetail/RafflesDetail';
import Payment from '../views/admin/payment/Payment';
import Signature from '../views/admin/signature/Signature';
import Datatable from '../views/admin/datatable/Datatable';

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
  {
    path: '/admin/payment/:id',
    name: 'Payment Details',
    component: Payment,
  },
  {
    path: '/admin/signature/:id',
    name: 'Signature Details',
    component: Signature,
  },
  {
    path: '/admin/datatable',
    name: 'Datatable',
    component: Datatable,
  },
];

export default routes;
