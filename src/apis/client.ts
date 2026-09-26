import axios, { isAxiosError } from 'axios';

// 서버 공통 응답 형식 (성공·실패 모두 같은 3개 키)
export interface ApiResponse<T> {
  success: boolean;
  data: T | null;
  message: string | null;
}

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  timeout: 10000,
});

// 에러에서 화면에 보여줄 메시지 추출
export const getErrorMessage = (error: unknown) => {
  if (isAxiosError<ApiResponse<null>>(error)) {
    // 서버가 응답은 했지만 실패 (400, 401, 409 등)
    if (error.response) {
      return error.response.data?.message ?? '요청에 실패했습니다.';
    }
    // 서버에 닿지 못함 (인터넷 끊김, 서버 다운, 타임아웃)
    return '네트워크 오류가 발생했습니다.';
  }
  return '알 수 없는 오류가 발생했습니다.';
};
