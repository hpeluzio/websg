import React from 'react';

const Home = React.lazy(() => import('./views/home/Home'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', component: Home },
];

export default routes;
