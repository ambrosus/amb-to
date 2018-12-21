/* global window */
/* global console */

import axios from 'axios';
import AmbrosusSDK from 'ambrosus-javascript-sdk';

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
  // console.error(error);
});

const ambrosusAPI = new AmbrosusSDK({
  apiEndpoint: 'https://gateway-test.ambrosus.com'
});

const getAsset = asseetId => {
  return ambrosusAPI.getAssetById(asseetId);
};

const getEvent = eventId => {
  return ambrosusAPI.getEventById(eventId);
};

const getEvents = assetId => {
  return ambrosusAPI.getEvents({assetId: assetId});
};

export default {
  API,
  getAsset,
  getEvent,
  getEvents
};