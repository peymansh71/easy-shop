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
    dispatch(roles_resultFailure(roles_result));
  }
};

//******************* */      post new Role   //************************* */

export const post_NewRoleDataRequest = () => ({
  type: ROLES_ACTION_TYPES.POST_ROLE_REQUEST,
});

export const post_roleSuccess = (payload) => ({
  type: ROLES_ACTION_TYPES.POST_ROLE_SUCCESS,
  payload,
});

export const post_roleFailure = (payload) => ({
  type: ROLES_ACTION_TYPES.POST_ROLE_FAILURE,
  payload,
});

export const postNewRoleData = (payload) => async (dispatch) => {
  dispatch(post_NewRoleDataRequest());

  // API
  const _response = await Service.Post_newRole(payload);
  if (_response) {
    dispatch(post_roleSuccess(_response));
  } else {
    dispatch(post_roleFailure(_response));
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
  const access_result = await Service.Get_accessControlData(payload);
  if (access_result) {
    dispatch(accessControlDataSuccess(access_result));
  } else {
    dispatch(accessControlDataFailure(access_result));
  }
};

//******************* */      get Module Page Field Data   //************************* */
export const modulepagefieldRequest = () => ({
  type: ROLES_ACTION_TYPES.MODULE_PAGE_REQUEST,
});

export const modulepagefieldSuccess = (payload) => ({
  type: ROLES_ACTION_TYPES.MODULE_PAGE_SUCCESS,
  payload,
});

export const modulepagefieldFailure = (payload) => ({
  type: ROLES_ACTION_TYPES.MODULE_PAGE_FAILURE,
  payload,
});

export const getModulePageFieldData = (payload) => async (dispatch) => {
  dispatch(modulepagefieldRequest());

  // API
  const modlue_result = await Service.Get_modulepagefieldData(payload);
  if (modlue_result) {
    dispatch(modulepagefieldSuccess(modlue_result));
  } else {
    dispatch(modulepagefieldFailure(modlue_result));
  }
};
