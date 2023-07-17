import { UiState } from './';

type UiActionType =
  | { type: '[Ui] - toogleModal' }
  | { type: '[Ui] - setActualCategory'; payload: string }
  | { type: '[Ui] - setShowUserMenu'; payload: boolean }
  | { type: '[Ui] - setActualPage'; payload: number };
export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case '[Ui] - toogleModal':
      return {
        ...state,
        showModal: !state.showModal
      };
    case '[Ui] - setActualCategory':
      return {
        ...state,
        actualCategory: action.payload
      };
    case '[Ui] - setShowUserMenu':
      return {
        ...state,
        showUserMenu: action.payload
      };
    case '[Ui] - setActualPage':
      return {
        ...state,
        actualPage: action.payload
      };
    default:
      return state;
  }
};
