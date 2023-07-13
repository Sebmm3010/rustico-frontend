import { createContext } from 'react';

interface ContextProps {
  showModal: boolean;
  showUserMenu: boolean;
  actualCategory: string;
  //* Metodos
  toogleModal: () => void;
  setShowUserMenu: (payload: boolean) => void;
  setActualCategory: (cat: string) => void;
}

export const UiContext = createContext({} as ContextProps);
