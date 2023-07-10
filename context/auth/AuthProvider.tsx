import { FC, useReducer, ReactNode, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { AuthContext, authReducer } from './';
import { IUser } from '@/interfaces';

export interface AuthState {
  isLogged: boolean;
  user?: IUser | undefined | null;
  logError: boolean;
}

const Auth_INITIAL_STATE: AuthState = {
  isLogged: false,
  user: null,
  logError: false
};

interface Props {
  children: ReactNode;
}
export const AuthProvider: FC<Props> = ({ children }) => {
  const { data, status } = useSession();
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);

  useEffect(() => {
    if (status === 'authenticated') {
      console.log({ user: data });
      dispatch({
        type: '[Auth] - Login',
        payload: { user: data.user, log: true, logError: false }
      });
    }
  }, [status, data]);

  const loginUser = async (userName: string, password: string) => {
    const login = await signIn('credentials', {
      userName,
      password,
      redirect: false
    });
    if (!login?.error) {
      dispatch({
        type: '[Auth] - Login',
        payload: { user: data?.user, log: true, logError: false }
      });
    } else {
      console.log({ err: login?.error });
      dispatch({
        type: '[Auth] - Login',
        payload: { user: null, log: false, logError: true }
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        //* Metodos
        loginUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
