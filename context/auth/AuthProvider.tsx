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
  return (
    <AuthContext.Provider
      value={{
        ...state
        //* Metodos
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
