import axios from 'axios';
axios.defaults.baseURL = 'https://i2x-challenge.herokuapp.com';

function parseJSON(response) {
  return response.data;
}

export function getRequest(url) {
  return axios.get(url)
    .then(parseJSON)
}

export function postRequest(url, payload) {
  return axios.post(url, payload)
    .then(parseJSON)
}

export function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common.Authorization = `JWT ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
}
