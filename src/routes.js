import React from 'react';

const Home = React.lazy(() => import('./views/home/Home'));
const Raffles = React.lazy(() => import('./views/raffles/Raffles'));
const RafflesDetail = React.lazy(() =>
  import('./views/rafflesDetail/RafflesDetail'),
);

//Admin area
const Users = React.lazy(() => import('./views/users/Users'));
const RafflesAdmin = React.lazy(() => import('./views/admin/raffles/Raffles'));
const RafflesDetailAdmin = React.lazy(() =>
  import('./views/admin/rafflesDetail/RafflesDetail'),
);

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/raffles', exact: true, name: 'Raffles', component: Raffles },
  {
    path: '/raffles/:id',
    name: 'Raffles Detail',
    component: RafflesDetail,
  },

  // Admin routes
  { path: '/admin/users', name: 'Users', component: Users },
  {
    path: '/admin/raffles',
    exact: true,
    name: 'Raffles Admin',
    component: RafflesAdmin,
  },
  {
    path: '/admin/raffles/:id',
    name: 'Raffles Detail Admin',
    component: RafflesDetailAdmin,
  },
];

export default routes;
