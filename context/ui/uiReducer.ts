import { UiState } from './';

type UiActionType =
  | { type: '[Ui] - toogleAuthMenu' }
  | { type: '[Ui] - setActualCategory'; payload: string };
export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case '[Ui] - toogleAuthMenu':
      return {
        ...state,
        isAuthMenuOpen: !state.isAuthMenuOpen
      };
    case '[Ui] - setActualCategory':
      return {
        ...state,
        actualCategory: action.payload
      };
    default:
      return state;
  }
};
