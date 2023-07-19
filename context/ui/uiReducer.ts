import { UiState } from './';

type UiActionType =
  | { type: '[Ui] - toogleModal' }
  | { type: '[Ui] - toogleOrderModal' }
  | { type: '[Ui] - setActualCategory'; payload: string }
  | { type: '[Ui] - setShowUserMenu'; payload: boolean };
export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case '[Ui] - toogleModal':
      return {
        ...state,
        showModal: !state.showModal
      };
    case '[Ui] - toogleOrderModal':
      return {
        ...state,
        orderModal: !state.orderModal
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

    default:
      return state;
  }
};
