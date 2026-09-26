import { type SubmitEvent, useState } from 'react';
import { Link } from 'react-router';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 이메일, 비밀번호 둘 다 입력해야 회원가입 버튼 활성화
  const isFilled = email.trim() !== '' && password !== '';

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert('미구현 상태입니다');
  };

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#E4EDFF] px-[20px]">
      <form
        onSubmit={handleSubmit}
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

        <button
          type="submit"
          disabled={!isFilled}
          className="mt-[40px] cursor-pointer rounded-[12px] bg-blue-500 px-[20px] py-[16px] text-action-medium font-bold text-gray-100 disabled:cursor-not-allowed disabled:bg-[#7BA7FF] disabled:text-[#E0E2E5]"
        >
          회원가입
        </button>

        <div className="mt-[28px] flex items-center justify-center text-body-small text-gray-400">
          <Link to="/login" className="cursor-pointer">로그인</Link>
        </div>
      </form>
    </main>
  );
};

export default Signup;
