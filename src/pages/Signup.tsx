import { type SubmitEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { signup } from '../apis/auth';
import { getErrorMessage } from '../apis/client';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Signup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 요청 중 여부 (중복 클릭 방지)
  const [isLoading, setIsLoading] = useState(false);
  // 실패 시 입력칸 아래에 보여줄 문구
  const [errorMessage, setErrorMessage] = useState('');

  // 이메일, 비밀번호 둘 다 입력해야 회원가입 버튼 활성화
  const isFilled = email.trim() !== '' && password !== '';

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');

    // 서버는 에러를 하나씩만 알려줘서 프론트에서 먼저 검사
    if (!EMAIL_REGEX.test(email.trim())) {
      setErrorMessage('이메일 형식이 올바르지 않습니다.');
      return;
    }
    if (password.length < 8) {
      setErrorMessage('비밀번호는 8자 이상이어야 합니다.');
      return;
    }

    setIsLoading(true);
    try {
      await signup({ email: email.trim(), password });
      alert('회원가입이 완료되었습니다. 로그인해 주세요.');
      navigate('/login');
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#E4EDFF] px-[20px]">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex w-full max-w-[560px] flex-col"
      >
        <div className="flex flex-col gap-[16px]">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일(아이디)을 입력하세요"
            aria-label="이메일"
            autoComplete="email"
            className="rounded-[12px] bg-gray-100 px-[20px] py-[16px] text-field-medium text-gray-500 outline-none placeholder:text-gray-300"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="비밀번호를 입력하세요 (8자 이상)"
            aria-label="비밀번호"
            autoComplete="new-password"
            className="rounded-[12px] bg-gray-100 px-[20px] py-[16px] text-field-medium text-gray-500 outline-none placeholder:text-gray-300"
          />
        </div>

        {errorMessage && (
          <p role="alert" className="mt-[12px] text-body-small text-point">
            {errorMessage}
          </p>
        )}

        <button
          type="submit"
          disabled={!isFilled || isLoading}
          className="mt-[40px] cursor-pointer rounded-[12px] bg-blue-500 px-[20px] py-[16px] text-action-medium font-bold text-gray-100 disabled:cursor-not-allowed disabled:bg-[#7BA7FF] disabled:text-[#E0E2E5]"
        >
          {isLoading ? '가입 중...' : '회원가입'}
        </button>

        <div className="mt-[28px] flex items-center justify-center text-body-small text-gray-400">
          <Link to="/login" className="cursor-pointer">로그인</Link>
        </div>
      </form>
    </main>
  );
};

export default Signup;
