import axios from "axios";

export const BASE_URL = "http://192.168.29.103:4040/api/";
export const IMG_URL = "http://192.168.29.103:4040/";

// export const BASE_URL = "https://flexihi-api.basenincorp.com/api/";
// export const IMG_URL = "https://flexihi-api.basenincorp.com/";

const constructApiRequest = (path: any, method: any, body: any) => ({
  url: path,
  method: method,
  data: body,
});

const Axios = axios.create({
  baseURL: BASE_URL,
  timeout: 20000,
});

const requests = {
  get: (path: any) => Axios(constructApiRequest(path, "get", "")),
  post: (path: any, params: any) =>
    Axios(constructApiRequest(path, "post", params)),
  put: (path: any, params: any) =>
    Axios(constructApiRequest(path, "put", params)),
  delete: (path: any, params: any) =>
    Axios(constructApiRequest(path, "delete", params)),
};

// add request path here
const requestPath = {
  // post
  addunit: "/unit/add",

  //put
  editUnit: "unit/update",

  // get
  getUnit: "unit/get",

  // delete
  deleteUnit: "unit/delete",
};

const ApiManager = {
  //get api's
  getUnitList: () => {
    return requests.get(`${requestPath.getUnit}`);
  },

  // post
  addUnit: (params: any) => {
    return requests.post(`${requestPath.addunit}`, params);
  },

  // delete
  deleteUnit: (params: any) => {
    return requests.delete(`${requestPath.deleteUnit}`, params);
  },
};

export default ApiManager;
