import axios, { AxiosInstance } from 'axios';

const api = () => {
  const instance: AxiosInstance = axios.create({
    baseURL: process.env.API_BASE_URL,
    timeout: 30000,
    headers: {
      'Content-Type': 'application/json',
    },
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
