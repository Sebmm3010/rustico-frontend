import { FC, useReducer, ReactNode } from 'react';
import { UiContext, uiReducer } from './';

export interface UiState {
  isAuthMenuOpen: boolean;
}

const Ui_INITIAL_STATE: UiState = {
  isAuthMenuOpen: false
};

interface Props {
  children: ReactNode;
}
export const UiProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, Ui_INITIAL_STATE);

  const toogleAuthMenu = () => {
    dispatch({ type: '[Ui] - toogleAuthMenu' });
  };

  return (
    <UiContext.Provider
      value={{
        ...state,

        // *Metodos
        toogleAuthMenu
      }}
    >
      {children}
    </UiContext.Provider>
  );
};
