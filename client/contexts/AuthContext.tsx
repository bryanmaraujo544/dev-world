import { createContext, ReactNode, useEffect } from 'react';
import { serverApi } from '../services/serverApi';
import { setCookie, parseCookies } from 'nookies';
import { toast } from 'react-toastify';

type User = {};

type SignInTypes = {
  email: string;
  password: string;
};

type AuthTypes = {
  signIn: (data: SignInTypes) => Promise<void>;
};

export const AuthContext = createContext({} as AuthTypes);

export function AuthProvider({ children }: any) {
  // const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    (async () => {
      const { '@token': token } = parseCookies();

      if (token) {
        console.log('there is token');
        // getting the user's information based on the jwt that is been sending throug headers;
        // We defined that every axios request has the header containing the jwt
        const { data } = await serverApi('/auth/profile');
        console.log({ data });
      }
    })();
  }, []);

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

      serverApi.defaults.headers['Authorization'] = `Bearer ${token}`;
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
