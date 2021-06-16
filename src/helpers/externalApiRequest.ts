'use strict';

import axios from 'axios';

interface ParamOptions {
  headers?: any;
}

function customGetRequest(apiEndpoint: string, paramOptions: ParamOptions) {
  return axios
    .get(apiEndpoint, paramOptions)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error;
    });
}

export { customGetRequest };
