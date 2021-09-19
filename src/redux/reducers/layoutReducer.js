import { SET_SIDEBARSHOW } from '../actions/layout/layoutActionTypes';
import { SET_LOADING } from '../actions/layout/layoutActionTypes';

const initialState = {
  sidebarShow: 'responsive',
  loading: false,
};

export const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIDEBARSHOW:
      return { ...state, sidebarShow: action.payload.sidebarShow };
    case SET_LOADING:
      return { ...state, loading: action.payload.loading };
    default:
      return state;
  }
};
