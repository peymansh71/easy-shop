import { combineReducers } from "redux";

import { RolesReducer } from "./reducers/RolesReducer";
import { AccessControlReducer } from "./reducers/AccessControlReducer";
import { ModulePageFieldReducer } from "./reducers/ModulePageReducer";

const rootReducer = combineReducers({
  roles: RolesReducer,
  accessControls: AccessControlReducer,
  modules: ModulePageFieldReducer,
});

export default rootReducer;
