import { SET_SIDEBARSHOW } from './layoutActionTypes';
import { SET_LOADING } from './layoutActionTypes';

export const setLayoutSideBarShow = ({ sidebarShow }) => ({
  type: SET_SIDEBARSHOW,
  payload: { sidebarShow },
});

export const setLoading = ({ loading }) => ({
  type: SET_LOADING,
  payload: { loading },
});
