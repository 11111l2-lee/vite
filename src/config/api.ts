// API 환경 설정
const API_CONFIG = {
  // 개발 환경
  development: {
    baseURL: 'http://localhost:3000',
    wsURL: 'ws://localhost:3001',
    // baseURL: 'http://[백엔드서버주소]', // 예: http://api.example.com
    // wsURL: 'ws://localhost:3001', // WebSocket은 우리 서버 사용
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  },
} as const;

// 현재 환경에 따른 API 설정 반환
const getApiConfig = () => {
  const env = import.meta.env.MODE || 'development';
  return API_CONFIG[env as keyof typeof API_CONFIG];
};

export const API = {
  // API 엔드포인트 정의
  endpoints: {
    // 인증 관련
    auth: {
      login: '/api/auth/login',
      logout: '/api/auth/logout',
      refresh: '/api/auth/refresh',
    },
    // 사용자 관련
    users: {
      profile: '/api/users/profile',
      update: '/api/users/update',
    },
  },
  // API 설정
  config: getApiConfig(),
};
