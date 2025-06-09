import axios from 'axios';
import { API } from '../config/api';

const axiosInstance = axios.create({
  baseURL: API.config.baseURL,
  timeout: API.config.timeout,
  headers: API.config.headers,
});

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.code === 'ECONNABORTED' || error.status === 408) {
      return Promise.reject('요청이 만료되었습니다.');
    } else {
      if (error.response && error.response.data) {
        return Promise.reject(error.response.data.message);
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
