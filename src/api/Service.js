// import "@babel/polyfill";

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

  // Access Control
  Get_accessControlData = ({ params = {}, body = {} }) =>
    this.fetchBase(
      APIRouteManager.generateRoute({
        key: APIEndpointConstants.GET_roleAccess,
        params,
      }),
      { method: "GET" }
    );
}

export default new Service();
