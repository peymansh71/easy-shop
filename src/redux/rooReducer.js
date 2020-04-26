import { combineReducers } from "redux";

import { RolesReducer } from "./reducers/RolesReducer";

const rootReducer = combineReducers({
  roles: RolesReducer,
});

export default rootReducer;
