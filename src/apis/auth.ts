import api from './axios';

export const login = (id: string, password: string) => {
  return api.post('/login', { id, password });
};

export const getMe = () => api.get('/me');

// Promise를 반환한다는 것은
// “비동기 작업의 결과를 나중에 받을 수 있는 객체(Promise)를 반환한다”는 뜻이야.
