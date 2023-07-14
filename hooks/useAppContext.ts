import { AuthContext, OrdersContext, UiContext } from '@/context';
import { useContext } from 'react';

export const useAppContext = () => {
  const auth = useContext(AuthContext);
  const order = useContext(OrdersContext);
  const ui = useContext(UiContext);
  return {
    ...auth,
    ...order,
    ...ui
  };
};
