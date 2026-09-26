import { type SubmitEvent, useState } from 'react';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');

  // 아이디, 비밀번호 둘 다 입력해야 로그인 버튼 활성화
  const isFilled = userId.trim() !== '' && password !== '';

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
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

        <button
          type="submit"
          disabled={!isFilled}
          className="mt-[40px] cursor-pointer rounded-[12px] bg-blue-500 px-[20px] py-[16px] text-action-medium font-bold text-gray-100 disabled:cursor-not-allowed disabled:bg-[#7BA7FF] disabled:text-[#E0E2E5]"
        >
          로그인
        </button>

        <div className="mt-[28px] flex items-center justify-center gap-[32px] text-body-small text-gray-400">
          <button type="button" className="cursor-pointer">
            회원가입
          </button>
          <span className="h-[20px] w-px bg-gray-400" aria-hidden="true" />
          <button type="button" className="cursor-pointer">
            아이디 찾기
          </button>
          <span className="h-[20px] w-px bg-gray-400" aria-hidden="true" />
          <button type="button" className="cursor-pointer">
            비밀번호 찾기
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
