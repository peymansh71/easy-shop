import Service from "../../api/Service";
import ROLES_ACTION_TYPES from "../constants/RolesConstants";

//******************* */      get Roles   //************************* */
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
  if (roles_result) {
    dispatch(roles_resultSuccess(roles_result));
  } else {
    console.log(">>>> roles_result is failed", roles_result);

    dispatch(roles_resultFailure(roles_result));
  }
};

//******************* */      get AccessControl Data   //************************* */
export const accessControlDataRequest = () => ({
  type: ROLES_ACTION_TYPES.ACCESS_CONTROl_REQUEST,
});

export const accessControlDataSuccess = (payload) => ({
  type: ROLES_ACTION_TYPES.ACCESS_CONTROl_SUCCESS,
  payload,
});

export const accessControlDataFailure = (payload) => ({
  type: ROLES_ACTION_TYPES.ACCESS_CONTROl_FAILURE,
  payload,
});

export const getAccessControlData = (payload) => async (dispatch) => {
  dispatch(accessControlDataRequest());

  // API
  const roles_result = await Service.Get_accessControlData(payload);
  if (roles_result) {
    dispatch(accessControlDataSuccess(roles_result));
  } else {
    console.log(">>>> roles_result is failed", roles_result);

    dispatch(accessControlDataFailure(roles_result));
  }
};
