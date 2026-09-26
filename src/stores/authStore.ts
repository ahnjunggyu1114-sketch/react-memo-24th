import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AuthState {
  accessToken: string | null;
  setAccessToken: (token: string) => void;
}

// persist: 상태를 localStorage('auth' 키)에 자동 저장하고, 새로고침 시 불러옴
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (token) => set({ accessToken: token }),
    }),
    { name: 'auth' }
  )
);
