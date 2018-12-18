/* global window */
/* global console */

import axios from 'axios';

const API = axios.create({
  baseURL: 'https://gateway-test.ambrosus.com/',
  headers: {
    'Content-Type': 'application/json'
  }
});

API.interceptors.response.use((response) => {
  if (response.data) {
    return response.data;
  }
  return response;

}, (error) => {
  console.error(error);
});

const getAsset = asseetId => {
  return API.get(`assets/${asseetId}`);
};

const getEvent = eventId => {
  return API.get(`events/${eventId}`);
};

export default {
  API,
  getAsset,
  getEvent
};
