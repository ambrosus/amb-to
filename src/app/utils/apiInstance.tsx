/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import axios, { AxiosInstance } from 'axios';

const apiInstance = (): AxiosInstance => axios.create({
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getRequest = (url: string) => {
  return apiInstance().get(url);
};

const postRequest = (url: string, body: any) => {
  return apiInstance().post(url, body);
};

const deleteRequest = (url: string) => {
  return apiInstance().delete(`${url}`);
};

const updateRequest = (url: string, body: any) => {
  return apiInstance().post(url, body);
};

export default { getRequest, postRequest, deleteRequest, updateRequest };
