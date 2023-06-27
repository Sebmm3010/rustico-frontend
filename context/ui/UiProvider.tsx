import { FC, useReducer, ReactNode } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
  isAuthMenuOpen: boolean;
  actualCategory: string;
}

const Ui_INITIAL_STATE: UiState = {
  isAuthMenuOpen: false,
  actualCategory: 'home'
};

interface Props {
  children: ReactNode;
}
export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE);

  const toogleAuthMenu = () => {
    dispatch({ type: '[Ui] - toogleAuthMenu' });
  };

  const setActualCategory = (cat: string) => {
    dispatch({ type: '[Ui] - setActualCategory', payload: cat });
  };
  return (
    <UiContext.Provider
      value={{
        ...state,
        // *Metodos
        toogleAuthMenu,
        setActualCategory
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
