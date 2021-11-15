import { createContext, ReactNode } from 'react';
import { serverApi } from '../services/serverApi';
import { setCookie } from 'nookies';
import { toast } from 'react-toastify';

type SignInTypes = {
  email: string;
  password: string;
};

type AuthTypes = {
  signIn: (data: SignInTypes) => Promise<void>;
};

export const AuthContext = createContext({} as AuthTypes);

export function AuthProvider({ children }: any) {
  const signIn = async ({ email, password }: SignInTypes) => {
    try {
      const { data } = await serverApi.post('/auth/login', {
        email,
        password,
      });
      const token = data.token;
      setCookie(null, '@token', token, {
        maxAge: 30 * 24 * 60 * 60,
      });
      toast.success(data.message);
    } catch (err: any) {
      const response = err.response?.data;
      toast.error(response?.message);
    }
  };

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
}
