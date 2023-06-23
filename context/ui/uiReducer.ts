import { UiState } from './';

type UiActionType = { type: '[Ui] - toogleAuthMenu' };

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
  switch (action.type) {
    case '[Ui] - toogleAuthMenu':
      return {
        ...state,
        isAuthMenuOpen: !state.isAuthMenuOpen
      };

    default:
      return state;
  }
};
