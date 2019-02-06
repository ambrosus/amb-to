import axios, { AxiosInstance } from 'axios';
import { StorageService } from '../services';

const api = () => {
  const instance: AxiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use((config) => {
    const token = StorageService.get('token');
    if (token !== null) {
      config.headers.Authorization = `AMB_TOKEN ${token}`;
    }
    return config;
  });

  instance.interceptors.response.use(undefined, (err: any) => {
    if (err.status === 401) {
      StorageService.delete('token');
      window.location.replace('/login');
    }
  });

  const getRequest = (url: string) => {
    return instance.get(url);
  };

  const postRequest = (url: string, body: any) => {
    return instance.post(url, body);
  };

  const deleteRequest = (url: string) => {
    return instance.delete(`${url}`);
  };

  const updateRequest = (url: string, body: any) => {
    return instance.post(url, body);
  };

  return { getRequest, postRequest, deleteRequest, updateRequest };
};

export default api();
