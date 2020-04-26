import { combineReducers } from "redux";

import { RolesReducer } from "./reducers/RolesReducer";
import { AccessControlReducer } from "./reducers/AccessControlReducer";

const rootReducer = combineReducers({
  roles: RolesReducer,
  accessControls: AccessControlReducer,
});

export default rootReducer;
