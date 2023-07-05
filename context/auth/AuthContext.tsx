import { IUser } from '@/interfaces';
import { createContext } from 'react';

interface ContextProps {
  isLogged: boolean;
  user?: IUser | null | undefined;
  // *Metodos
  loginUser: (userName: string, password: string) => Promise<void>;
  logoutUser: () => void;
}

export const AuthContext = createContext({} as ContextProps);
