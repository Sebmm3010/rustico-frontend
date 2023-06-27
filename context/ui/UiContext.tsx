import { createContext } from 'react';

interface ContextProps {
  isAuthMenuOpen: boolean;
  actualCategory: string;
  //* Metodos
  toogleAuthMenu: () => void;
  setActualCategory: (cat: string) => void;
}

export const UiContext = createContext({} as ContextProps);
