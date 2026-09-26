import { type ApiResponse, client } from './client';

export interface SignupRequest {
  email: string;
  password: string;
}

export interface SignupResponse {
  userId: number;
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
}

export const signup = async (body: SignupRequest) => {
  const { data } = await client.post<ApiResponse<SignupResponse>>(
    '/api/auth/signup',
    body
  );
  return data;
};

export const login = async (body: LoginRequest) => {
  const { data } = await client.post<ApiResponse<LoginResponse>>(
    '/api/auth/login',
    body
  );
  return data;
};
