import { createContext } from 'react';

interface ContextProps {
  isAuthMenuOpen: boolean;
  //* Metodos
  toogleAuthMenu: () => void;
}

export const UiContext = createContext({} as ContextProps);
