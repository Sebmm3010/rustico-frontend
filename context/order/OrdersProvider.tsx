import { FC, useReducer, ReactNode } from 'react';
import { OrdersContext, ordersReducer } from '.';
import { IProduct } from '@/interfaces';

export interface OrdersState {
  selectedProduct: IProduct | null;
}

const Orders_INITIAL_STATE: OrdersState = {
  selectedProduct: null
};

interface Props {
  children: ReactNode;
}
export const OrdersProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(ordersReducer, Orders_INITIAL_STATE);
  const setSelectedProduct = (product: IProduct) => {
    dispatch({ type: '[Orders]-Set selected product', payload: product });
  };

  return (
    <OrdersContext.Provider
      value={{
        ...state,
        // * Metodos
        setSelectedProduct
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
