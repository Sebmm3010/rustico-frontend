import { createContext } from 'react';

interface ContextProps {
  showModal: boolean;
  actualCategory: string;
  //* Metodos
  toogleModal: () => void;
  setActualCategory: (cat: string) => void;
}

export const UiContext = createContext({} as ContextProps);
