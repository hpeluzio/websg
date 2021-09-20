import React from 'react';
import CIcon from '@coreui/icons-react';

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Home',
    to: '/home',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Blog',
    to: '/blog',
    icon: <CIcon name="cil-notes" customClasses="c-sidebar-nav-icon" />,
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Listas'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sorteios',
    to: '/raffles',
    icon: <CIcon name="cil-list-rich" customClasses="c-sidebar-nav-icon" />,
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Administrativo'],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Usuários',
    to: '/admin/users',
    icon: <CIcon name="cil-user" customClasses="c-sidebar-nav-icon" />,
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Sorteios',
    to: '/admin/raffles',
    icon: <CIcon name="cil-list-rich" customClasses="c-sidebar-nav-icon" />,
    // badge: {
    //   color: "info",
    //   text: "NEW",
    // },
  },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     // {
  //     //   _tag: "CSidebarNavItem",
  //     //   name: "Register",
  //     //   to: "/register",
  //     // },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
];

export default _nav;
