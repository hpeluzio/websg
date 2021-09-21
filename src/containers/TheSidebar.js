import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLayoutSideBarShow } from '../redux/actions/layout/layoutActions';

import { colors } from 'src/styles';
import trevo from '../assets/icons/trevo.svg';
import trevo_full from '../assets/icons/trevo_full.svg';

import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react';

import CIcon from '@coreui/icons-react';

// sidebar nav config
import navigationPublic from './_navPublic';
import navigationUser from './_nav';
import navigationAdmin from './_navAdmin';

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector(s => s.layout.sidebarShow);
  const role = useSelector(s => s.session.user.role);

  const nav = useCallback(() => {
    if (role === undefined) {
      return navigationPublic;
    }
    if (role === 'user') {
      return navigationUser;
    }
    if (role === 'admin') {
      return navigationAdmin;
    }
  }, [role]);

  return (
    <CSidebar
      style={{ background: colors.primaryDark }}
      show={show}
      onShowChange={val =>
        dispatch(setLayoutSideBarShow({ sidebarShow: val }))
      }>
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
          src={trevo_full}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
          src={trevo}
        />
      </CSidebarBrand>
      <CSidebarNav style={{ background: colors.primaryDark }}>
        <CCreateElement
          items={nav()}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
