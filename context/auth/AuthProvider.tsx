import { FC, useReducer, ReactNode, useEffect } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { AuthContext, authReducer } from './';
import { IUser } from '@/interfaces';

export interface AuthState {
  isLogged: boolean;
  user?: IUser | undefined | null;
}

const Auth_INITIAL_STATE: AuthState = {
  isLogged: false,
  user: null
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
      dispatch({ type: '[Auth] - Login', payload: data.user });
    }
  }, [status, data]);

  const loginUser = async (userName: string, password: string) => {
    console.log(userName, password);
    await signIn('credentials', { userName, password });
    dispatch({ type: '[Auth] - Login', payload: data?.user });
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
