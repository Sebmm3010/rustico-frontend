import { createContext } from 'react';

interface ContextProps {
  showModal: boolean;
  showUserMenu: boolean;
  actualCategory: string;
  actualPage: number;
  //* Metodos
  toogleModal: () => void;
  setShowUserMenu: (payload: boolean) => void;
  setActualCategory: (cat: string) => void;
  setActualPage: (payload: number) => void;
}

export const UiContext = createContext({} as ContextProps);
