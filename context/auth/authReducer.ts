import { IUser } from '@/interfaces';
import { AuthState } from './';

type authActionType =
  | { type: '[Auth] - Login'; payload: IUser | undefined }
  | { type: '[Auth] - Logout' };

export const authReducer = (
  state: AuthState,
  action: authActionType
): AuthState => {
  switch (action.type) {
    case '[Auth] - Login':
      return {
        ...state,
        isLogged: true,
        user: action.payload
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
