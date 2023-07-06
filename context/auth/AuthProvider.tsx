import { FC, useReducer, ReactNode, useEffect } from 'react';
import { AuthContext, authReducer } from './';
import { IUser } from '@/interfaces';

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
