import { type SubmitEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { login } from '../apis/auth';
import { isNetworkError } from '../apis/client';
import NetworkErrorModal from '../components/NetworkErrorModal';
import { useAuthStore } from '../stores/authStore';

const Login = () => {
  const navigate = useNavigate();
  const setAccessToken = useAuthStore((state) => state.setAccessToken);

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  // 요청 중 여부 (중복 클릭 방지)
  const [isLoading, setIsLoading] = useState(false);
  // 아이디/비밀번호 불일치 문구
  const [errorMessage, setErrorMessage] = useState('');
  // 네트워크 에러 모달
  const [isNetworkErrorOpen, setIsNetworkErrorOpen] = useState(false);

  // 아이디, 비밀번호 둘 다 입력해야 로그인 버튼 활성화
  const isFilled = userId.trim() !== '' && password !== '';

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    setIsLoading(true);
    try {
      const { data } = await login({ email: userId.trim(), password });
      if (data) {
        setAccessToken(data.accessToken);
        navigate('/');
      }
    } catch (error) {
      if (isNetworkError(error)) {
        setIsNetworkErrorOpen(true);
      } else {
        setErrorMessage('*아이디 또는 비밀번호가 옳지 않습니다');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#E4EDFF] px-[20px]">
      <form
        onSubmit={handleSubmit}
        className="flex w-full max-w-[560px] flex-col"
      >
        <div className="flex flex-col gap-[16px]">
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="아이디를 입력하세요"
            aria-label="아이디"
            autoComplete="username"
            className="rounded-[12px] bg-gray-100 px-[20px] py-[16px] text-field-medium text-gray-500 outline-none placeholder:text-gray-300"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요"
            aria-label="비밀번호"
            autoComplete="current-password"
            className="rounded-[12px] bg-gray-100 px-[20px] py-[16px] text-field-medium text-gray-500 outline-none placeholder:text-gray-300"
          />
        </div>

        {/* 에러 문구가 떠도 버튼 위치가 안 움직이도록 40px 영역 안에 표시 */}
        <div className="h-[40px] pt-[4px]">
          {errorMessage && (
            <p role="alert" className="text-body-small text-point">
              {errorMessage}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={!isFilled || isLoading}
          className="cursor-pointer rounded-[12px] bg-blue-500 px-[20px] py-[16px] text-action-medium font-bold text-gray-100 disabled:cursor-not-allowed disabled:bg-[#7BA7FF] disabled:text-[#E0E2E5]"
        >
          {isLoading ? '로그인 중...' : '로그인'}
        </button>

        <div className="mt-[28px] flex items-center justify-center gap-[32px] text-body-small text-gray-400">
          <Link to="/signup" className="cursor-pointer">
            회원가입
          </Link>
          <span className="h-[20px] w-px bg-gray-400" aria-hidden="true" />
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => alert('미구현 상태입니다')}
          >
            아이디 찾기
          </button>
          <span className="h-[20px] w-px bg-gray-400" aria-hidden="true" />
          <button
            type="button"
            className="cursor-pointer"
            onClick={() => alert('미구현 상태입니다')}
          >
            비밀번호 찾기
          </button>
        </div>
      </form>

      {isNetworkErrorOpen && (
        <NetworkErrorModal onClose={() => setIsNetworkErrorOpen(false)} />
      )}
    </main>
  );
};

export default Login;
