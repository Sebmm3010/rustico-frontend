import { FC, useReducer, ReactNode } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
  showModal: boolean;
  showUserMenu: boolean;
  actualCategory: string;
  orderModal: boolean;
}

const Ui_INITIAL_STATE: UiState = {
  showModal: false,
  orderModal: false,
  showUserMenu: false,
  actualCategory: 'home'
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
  const toogleOrderModal = () => {
    dispatch({ type: '[Ui] - toogleOrderModal' });
  };
  return (
    <UiContext.Provider
      value={{
        ...state,
        // *Metodos
        toogleModal,
        toogleOrderModal,
        setActualCategory,
        setShowUserMenu
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
