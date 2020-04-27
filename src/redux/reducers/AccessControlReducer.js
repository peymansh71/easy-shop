/* eslint-disable */
import initialState from "../intialState";
import ROLES_ACTION_TYPES from "../constants/RolesConstants";

export function AccessControlReducer(
  state = initialState.accessControls,
  action
) {
  console.log(action);
  switch (action.type) {
    // Request
    case ROLES_ACTION_TYPES.ACCESS_CONTROl_SUCCESS:
      return [...action.payload];

    default:
      return state;
  }
}
