import { createContext } from 'react';

interface ContextProps {
  showModal: boolean;
  showUserMenu: boolean;
  actualCategory: string;
  orderModal: boolean;
  //* Metodos
  toogleModal: () => void;
  toogleOrderModal: () => void;
  setShowUserMenu: (payload: boolean) => void;
  setActualCategory: (cat: string) => void;
}

export const UiContext = createContext({} as ContextProps);
