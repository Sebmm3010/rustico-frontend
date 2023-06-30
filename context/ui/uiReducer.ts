import { UiState } from './';

type UiActionType =
  | { type: '[Ui] - toogleModal' }
  | { type: '[Ui] - setActualCategory'; payload: string };
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
    default:
      return state;
  }
};
