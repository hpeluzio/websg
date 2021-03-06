import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { setLayoutSideBarShow } from '../redux/actions/layout/layoutActions';
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  // CLink,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';

import trevo_full_dark from '../assets/icons/trevo_full_dark.svg';

// routes config
import common from 'src/routes/public';
import user from 'src/routes/user';
import admin from 'src/routes/admin';

import {
  TheHeaderDropdown,
  // TheHeaderDropdownMssg,
  // TheHeaderDropdownNotif,
  // TheHeaderDropdownTasks,
} from './index';

const TheHeader = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const sidebarShow = useSelector(s => s.layout.sidebarShow);
  const token = useSelector(s => s.session.token);

  useEffect(() => {
    if (token === null) {
      history.push('/login');
    }
  }, [history, token]);

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow)
      ? false
      : 'responsive';
    // dispatch({ type: "set", sidebarShow: val });
    dispatch(setLayoutSideBarShow({ sidebarShow: val }));
  };

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow)
      ? true
      : 'responsive';
    dispatch(setLayoutSideBarShow({ sidebarShow: val }));
  };

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CIcon name="logo" height="48" alt="Logo" src={trevo_full_dark} />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/home">Home</CHeaderNavLink>
        </CHeaderNavItem>
        {/* <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/users">Users</CHeaderNavLink>
        </CHeaderNavItem> */}
        {/* <CHeaderNavItem className="px-3">
          <CHeaderNavLink>Settings</CHeaderNavLink>
        </CHeaderNavItem> */}
      </CHeaderNav>

      <CHeaderNav className="px-3">
        {/* <TheHeaderDropdownNotif />
        <TheHeaderDropdownTasks />
        <TheHeaderDropdownMssg /> */}
        {!token && (
          <CHeaderNavItem className="px-3">
            <CHeaderNavLink to="/login">Login</CHeaderNavLink>
          </CHeaderNavItem>
        )}
        {token && <TheHeaderDropdown />}
      </CHeaderNav>

      {/* <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
          routes={[...common, ...user, ...admin]}
        />
        <div className="d-md-down-none mfe-2 c-subheader-nav">
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-speech" alt="Settings" />
          </CLink>
          <CLink
            className="c-subheader-nav-link"
            aria-current="page"
            to="/home">
            <CIcon name="cil-graph" alt="Home" />
            &nbsp;Home
          </CLink>
          <CLink className="c-subheader-nav-link" href="#">
            <CIcon name="cil-settings" alt="Settings" />
            &nbsp;Settings
          </CLink>
        </div>
      </CSubheader> */}
    </CHeader>
  );
};

export default TheHeader;
