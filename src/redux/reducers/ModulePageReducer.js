/* eslint-disable */
import initialState from "../intialState";
import ROLES_ACTION_TYPES from "../constants/RolesConstants";

export function ModulePageFieldReducer(state = initialState.modules, action) {
  switch (action.type) {
    // Request
    case ROLES_ACTION_TYPES.MODULE_PAGE_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
}
