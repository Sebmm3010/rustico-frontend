import { IUser } from '@/interfaces';
import { AuthState } from './';

type authActionType =
  | {
      type: '[Auth] - Login';
      payload: {
        user: IUser | undefined | null;
        log: boolean;
        logError: boolean;
      };
    }
  | { type: '[Auth] - Logout' };

export const authReducer = (
  state: AuthState,
  action: authActionType
): AuthState => {
  switch (action.type) {
    case '[Auth] - Login':
      return {
        ...state,
        isLogged: action.payload.log,
        user: action.payload.user,
        logError: action.payload.logError
      };
    case '[Auth] - Logout':
      return {
        ...state,
        isLogged: false,
        user: null
      };
    default:
      return state;
  }
};
