import { IUser } from '@/interfaces';
import { createContext } from 'react';

interface ContextProps {
  isLogged: boolean;
  user?: IUser | null | undefined;
  // *Metodos
}

export const AuthContext = createContext({} as ContextProps);
