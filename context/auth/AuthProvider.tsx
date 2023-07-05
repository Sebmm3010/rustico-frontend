import { FC, useReducer, ReactNode, useEffect } from 'react';
import { AuthContext, authReducer } from './';
import { IUser } from '@/interfaces';
import { signIn, signOut, useSession } from 'next-auth/react';

export interface AuthState {
  isLogged: boolean;
  user?: IUser | null | undefined;
}

const Auth_INITIAL_STATE: AuthState = {
  isLogged: false,
  user: null
};

interface Props {
  children: ReactNode;
}
export const AuthProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, Auth_INITIAL_STATE);
  const { data, status } = useSession();

  useEffect(() => {
    if (status === 'authenticated') {
      dispatch({ type: '[Auth] - Login', payload: data.user as IUser });
    }
  }, [status, data]);

  const loginUser = async (userName: string, password: string) => {
    await signIn('credentials', { userName, password });
    dispatch({ type: '[Auth] - Login', payload: data?.user as IUser });
  };
  const logoutUser = () => {
    signOut();
    dispatch({ type: '[Auth] - Logout' });
  };
  return (
    <AuthContext.Provider
      value={{
        ...state,
        //* Metodos
        loginUser,
        logoutUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
