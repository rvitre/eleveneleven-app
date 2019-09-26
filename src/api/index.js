import axios from "axios";
import config from "../config";

axios.defaults.headers.post["Content-Type"] =
  "application/json";

//This will be taken from electron  
axios.defaults.headers.common["x-api-as-key"] =
  "7LAPuJqGQApn1lxES6xTqC1sjkxVtfcX";

//This will be taken from electron  
axios.defaults.headers.common["x-visibility-scope-key"] =
  "CA2087653456763";

const ENDPOINT_QA = "https://kong.stage-affinionservices.com/core/";
const ENDPOINT_PROD = "https://kong.affinionservices.com/core/";

const API_ENDPOINT = config.ENV === "PROD" ? ENDPOINT_PROD : ENDPOINT_QA;
export const REDIRECT = config.ENV === "PROD" ? "" : "?redirect-url-type=stage";

export const VERSION = 1;
export const ENV_API = "qa";

export const PREFIX_ACCOUNTS_SERVICE = `service_accounts/`;



export async function GET(url, requestConfig = {}) {
  try {
    const response = await axios.get(`${API_ENDPOINT}${url}`, requestConfig);
    console.log("Response: ", response);
    if (response.data.status && response.data.status >= 400)
      return Promise.reject(response.data);
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err.response);
  }
}

export async function POST(url, content = {}, requestConfig = {}) {
  try {
    const response = await axios.post(
      `${API_ENDPOINT}${url}`,
      content,
      requestConfig
    );
    console.log("Response: ", response);
    // if (response.data.status && response.data.status >= 400) {
    if (response.status && response.status >= 400) {
      return Promise.reject(response.data);
    }
    return Promise.resolve(response.data);
  } catch (err) {
    console.log("Error: ", err.response);
    console.log(JSON.stringify(err));
    return Promise.reject(err.response);
  }
}

export async function PUT(url, content = {}) {
  try {
    const response = await axios.put(`${API_ENDPOINT}${url}`, content);
    console.log("Response: ", response.data);
    if (response.data.status && response.data.status >= 400)
      return Promise.reject(response.data);
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err.response);
  }
}

export async function PATCH(url, content = {}) {
  try {
    const response = await axios.patch(`${API_ENDPOINT}${url}`, content);
    console.log("Response: ", response.data);
    if (response.data.status && response.data.status >= 300)
      return Promise.reject(response.data);
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err.response);
  }
}

export async function DEL(url) {
  try {
    const response = await axios.del(`${API_ENDPOINT}${url}`);
    console.log("Response: ", response.data);
    if (response.data.status && response.data.status >= 300)
      return Promise.reject(response.data);
    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err.response);
  }
}

export function paramsToUri(params) {
  let uri = "?";

  Object.keys(params).forEach((key, pos) => {
    uri += `${key}=${params[key]}`;
    if (pos + 1 < Object.keys(params).length) uri += "&";
  });

  return uri;
}
