import APIRouteManager from "./APIRoutesManager";
import APIEndpointConstants from "./APIEndpointConstants";

class Service {
  async fetchBase(url, options) {
    let fetchOptions = { ...options };

    // call api
    try {
      const response = await Promise.race([fetch(url, { ...fetchOptions })]);

      // get result
      const result = await response.json();

      if (result.hasOwnProperty("errors")) {
        throw result;
      } else return result;
    } catch (e) {
      console.log(e);
    }
  }

  // Roles
  Get_rolesData = ({ params = {}, body = {} }) =>
    this.fetchBase(
      APIRouteManager.generateRoute({
        key: APIEndpointConstants.GET_roles,
        params,
      }),
      { method: "GET" }
    );

  Post_newRole = ({ params = {}, body = {} }) =>
    this.fetchBase(
      APIRouteManager.generateRoute({
        key: APIEndpointConstants.Post_newRole,
        params,
      }),
      { method: "POST" }
    );

  // Access Control
  Get_accessControlData = ({ params = {}, body = {} }) =>
    this.fetchBase(
      APIRouteManager.generateRoute({
        key: APIEndpointConstants.Get_accessControlData,
        params,
      }),
      { method: "GET" }
    );

  // Module Page
  Get_modulepagefieldData = ({ params = {}, body = {} }) =>
    this.fetchBase(
      APIRouteManager.generateRoute({
        key: APIEndpointConstants.Get_modulepagefieldData,
        params,
      }),
      { method: "GET" }
    );
}

export default new Service();
