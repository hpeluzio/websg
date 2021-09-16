import { SET_SIDEBARSHOW } from './layoutActionTypes';

export const setLayoutSideBarShow = ({ sidebarShow }) => ({
  type: SET_SIDEBARSHOW,
  payload: { sidebarShow },
});
