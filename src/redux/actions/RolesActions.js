import Service from "../../api/Service";
import ROLES_ACTION_TYPES from "../constants/RolesConstants";

// OVERVIEW
export const getRolesDataRequest = () => ({
  type: ROLES_ACTION_TYPES.ROLES_DATA_REQUEST,
});

export const roles_resultSuccess = (payload) => ({
  type: ROLES_ACTION_TYPES.ROLES_DATA_SUCCESS,
  payload,
});

export const roles_resultFailure = (payload) => ({
  type: ROLES_ACTION_TYPES.ROLES_DATA_FAILURE,
  payload,
});

export const getRolesData = (payload) => async (dispatch) => {
  dispatch(getRolesDataRequest());

  // API
  const roles_result = await Service.Get_rolesData(payload);

  if (!roles_result.hasOwnProperty("errors")) {
    dispatch(roles_resultSuccess(roles_result));
  } else {
    console.log(">>>> roles_result is failed", roles_result);

    dispatch(roles_resultFailure(roles_result));
  }
};
