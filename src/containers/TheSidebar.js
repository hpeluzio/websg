import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLayoutSideBarShow } from '../redux/actions/layout/layoutActions';

import { colors } from 'src/styles';
import trevo from '../assets/icons/trevo.svg';

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
import navigation from './_nav';
import navigationAdmin from './_navAdmin';

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector(s => s.layout.sidebarShow);
  const role = useSelector(s => s.session.user.role);

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
          src={trevo}
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
          items={role === 'admin' ? navigationAdmin : navigation}
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
