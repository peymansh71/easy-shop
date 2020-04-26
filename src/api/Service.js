// import "@babel/polyfill";

import APIRouteManager from "./APIRoutesManager";
import APIEndpointConstants from "./APIEndpointConstants";

class Service {
  async fetchBase(url, options) {
    let fetchOptions = { ...options };

    console.log(url);

    // call api
    try {
      const response = await Promise.race([
        fetch(url, { ...fetchOptions }),
        new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              errors: {
                code: 408,
                message: "خطایی رخ داده است ،‌لطفا مجددا تلاش کنید!",
              },
            });
          }, 40 * 1000);
        }),
      ]);

      // get result
      const result = await response.json();

      if (
        result.hasOwnProperty("errors") || // backend "errors"
        result.hasOwnProperty("error") // auth "error"
      ) {
        throw result;
      } else return result;
    } catch (e) {
      console.log(e);
    }
  }

  // USER
  Get_rolesData = ({ params = {}, body = {} }) =>
    this.fetchBase(
      APIRouteManager.generateRoute({
        key: APIEndpointConstants.GET_roles,
        params,
      }),
      { method: "GET" }
    );
}

export default new Service();
