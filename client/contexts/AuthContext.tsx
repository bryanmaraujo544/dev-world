import { createContext, ReactNode, useEffect } from 'react';
import { serverApi } from '../services/serverApi';
import { setCookie, parseCookies } from 'nookies';
import { toast } from 'react-toastify';
import { apiResolver } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';

type User = {};

type SignInTypes = {
  email: string;
  password: string;
};

type AuthTypes = {
  signIn: (data: SignInTypes) => Promise<void>;
  githubSignInUrl: string

};

export const AuthContext = createContext({} as AuthTypes);

export function AuthProvider({ children }: any) {
  const router = useRouter();
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

  // -------------------- GITHUB AUTH CODE -------------------- //

  const githubSignInUrl = 'https://github.com/login/oauth/authorize?scope=user&client_id=c5fd2ca48a36179ee6ee';

  const signInWithGithub = async (githubCode: string) => {
    const { data } = await serverApi.post('/auth/github', {
      code: githubCode
    }); // grabbing the token of the user

    setCookie(null, '@token', data.token, {
      maxAge: 30 * 24 * 60 * 60,
    });

    serverApi.defaults.headers.common.authorization = `Bearer ${data.token}`;
    toast.success(data.message);
  }

  // This useEffect code is for when the page is redirected to github and this page redirect back to application and send a code
  // So when the page redirect the user to app, the user will be available to use
  useEffect(() => {
    (async () => {
      const url = window.location.href;
      const hasGithubCode = url.includes('?code=');
      console.log(url, hasGithubCode);
      if (hasGithubCode) {
        const [urlWithoutCode, githubCode] = url.split('?code=');

        window.history.pushState({}, '', urlWithoutCode);
        await signInWithGithub(githubCode);
        router.push('/');
      }
    })()
  }, []);

  

  return (
    <AuthContext.Provider value={{ signIn, githubSignInUrl }}>
      {children}
    </AuthContext.Provider>
  );
}
