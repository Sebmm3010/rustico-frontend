import { FC, useReducer, ReactNode } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
  showModal: boolean;
  showUserMenu: boolean;
  actualCategory: string;
  actualPage: number;
}

const Ui_INITIAL_STATE: UiState = {
  showModal: false,
  showUserMenu: false,
  actualCategory: 'home',
  actualPage: 1
};

interface Props {
  children: ReactNode;
}
export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE);

  const toogleModal = () => {
    dispatch({ type: '[Ui] - toogleModal' });
  };

  const setActualCategory = (cat: string) => {
    dispatch({ type: '[Ui] - setActualCategory', payload: cat });
  };
  const setShowUserMenu = (payload: boolean) => {
    dispatch({ type: '[Ui] - setShowUserMenu', payload });
  };
  const setActualPage = (payload: number) => {
    dispatch({ type: '[Ui] - setActualPage', payload });
  };
  return (
    <UiContext.Provider
      value={{
        ...state,
        // *Metodos
        toogleModal,
        setActualCategory,
        setShowUserMenu,
        setActualPage
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
