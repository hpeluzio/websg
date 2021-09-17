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
  { path: '/raffles', name: 'Raffles', component: Raffles },
  {
    path: '/rafflesdetail/:id',
    name: 'RafflesDetail',
    component: RafflesDetail,
  },

  // Admin routes
  { path: '/admin/users', name: 'Users', component: Users },
  { path: '/admin/raffles', name: 'RafflesAdmin', component: RafflesAdmin },
  {
    path: '/admin/rafflesdetail/:id',
    name: 'RafflesDetailAdmin',
    component: RafflesDetailAdmin,
  },
];

export default routes;
