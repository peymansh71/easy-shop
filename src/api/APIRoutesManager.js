/* eslint-disable no-undef */

import APIEndpointConstants from "./APIEndpointConstants";

class APIRouteManager {
  constructor() {
    this.BASE_EASYSHOP_URL = "https://easyshop-api.azurewebsites.net";

    this.pathNames = {
      [APIEndpointConstants.GET_roles]: "api/role",
      [APIEndpointConstants.GET_roleAccess]: "api/roleModulepageFieldAccess",
    };
  }

  generateRoute = ({ key, type, params = {} }) =>
    `${this.generateEndpointPath(key, type)}${this.generateSearchQuery(
      params
    )}`;

  generateEndpointPath = (key, type) => {
    return `${this.BASE_EASYSHOP_URL}/${this.pathNames[key]}`;
  };

  generateSearchQuery = (params) => {
    const searchParams = new URLSearchParams();

    if (Object.keys(params).length !== 0) {
      Object.entries(params).forEach(([key, val]) =>
        searchParams.set(key, val)
      );

      return `?${searchParams.toString()}`;
    } else return "";
  };
}

export default new APIRouteManager();
