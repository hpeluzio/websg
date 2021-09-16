import { combineReducers } from "redux";

import { sessionReducer } from "./sessionReducer";
import { layoutReducer } from "./layoutReducer";

export const rootReducer = combineReducers({
  session: sessionReducer,
  layout: layoutReducer,
});
