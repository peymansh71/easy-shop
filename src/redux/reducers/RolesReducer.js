/* eslint-disable */
import initialState from "../../intialState";
import ROLES_ACTION_TYPES from "../constants/RolesConstants";

export function RolesReducer(state = initialState.roles, action) {
  console.log(initialState);
  switch (action.type) {
    // Request
    case ROLES_ACTION_TYPES.ROLES_DATA_SUCCESS:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
}
