import { SET_SIDEBARSHOW } from "../actions/layout/layoutActionTypes";

const initialState = {
  sidebarShow: "responsive",
};

export const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SIDEBARSHOW:
      return { ...state, sidebarShow: action.payload.sidebarShow };
    default:
      return state;
  }
};
