import React from 'react';

const Home = React.lazy(() => import('./views/home/Home'));
const Raffles = React.lazy(() => import('./views/raffles/Raffles'));
const Users = React.lazy(() => import('./views/users/Users'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', component: Home },
  { path: '/raffles', name: 'Raffles', component: Raffles },
  { path: '/users', name: 'Users', component: Users },
];

export default routes;
