import { IUser } from '@/interfaces';
import { createContext } from 'react';

interface ContextProps {
  isLogged: boolean;
  user?: IUser | null | undefined;
  logError: boolean;
  // *Metodos
  loginUser: (userName: string, password: string) => Promise<boolean>;
}

export const AuthContext = createContext({} as ContextProps);
