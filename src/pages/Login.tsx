import { useState } from 'react';
import { login, getMe } from '@/apis/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(id, pw);
      const me = await getMe(); // 사용자 정보 조회
      console.log('내 정보:', me.data);
      navigate('/');
    } catch (_err) {
      console.error(_err);
      alert('로그인 실패');
    }
  };

  const handleInputIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleInputPwChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
  };

  return (
    <>
      <div>
        <input type="text" value={id} onChange={(e) => handleInputIdChange(e)} placeholder="ID" />
        <input
          type="text"
          value={pw}
          onChange={(e) => handleInputPwChange(e)}
          placeholder="Password"
        />
      </div>
      <button type="button" onClick={handleLogin}>
        로그인
      </button>
    </>
  );
}
