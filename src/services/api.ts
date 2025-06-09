import axiosInstance from './axios';
import { API } from '../config/api';

// API 서비스
export const apiService = {
  // 인증 관련
  auth: {
    login: (email: string, password: string) => {
      return axiosInstance.post(API.endpoints.auth.login, { email, password });
    },
    logout: () => {
      return axiosInstance.post(API.endpoints.auth.logout);
    },
  },
  // 사용자 관련
  users: {
    getProfile: () => {
      return axiosInstance.get(API.endpoints.users.profile);
    },
    updateProfile: (data: any) => {
      return axiosInstance.put(API.endpoints.users.update, data);
    },
  },
  // 채팅 관련 (폴링 방식)
  chat: {
    getMessages: () => {
      return axiosInstance.get('/messages');
    },
    sendMessage: (content: string) => {
      return axiosInstance.post('/messages', { content });
    },
  },
};
