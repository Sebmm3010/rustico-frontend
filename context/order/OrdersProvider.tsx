import { FC, useReducer, ReactNode, useState } from 'react';
import { OrdersContext, ordersReducer } from '.';
import { IProduct } from '@/interfaces';
import { IOrder, OrderItem } from '../../interfaces/orders';

export interface OrdersState {
  selectedProduct: IProduct | null;
  actualOrder: IOrder | null;
}

const Orders_INITIAL_STATE: OrdersState = {
  selectedProduct: null,
  actualOrder: null
};

interface Props {
  children: ReactNode;
}
export const OrdersProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(ordersReducer, Orders_INITIAL_STATE);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const setSelectedProduct = (product: IProduct) => {
    dispatch({ type: '[Orders]-Set selected product', payload: product });
  };
  const handleAgregarProducto = (
    { id, precio, titulo }: IProduct,
    cantidad: number
  ) => {
    const subTotal = precio * cantidad;
    const orderItem: OrderItem = { id, titulo, precio, cantidad, subTotal };
    // ? Nueva cantidad
    if (orderItems.some(({ id }) => id === orderItem.id)) {
      const newOrdersItems = orderItems.map((item) =>
        item.id === orderItem.id ? orderItem : item
      );
      setOrderItems(newOrdersItems);
    } else {
      setOrderItems([...orderItems, orderItem]);
    }
  };
  return (
    <OrdersContext.Provider
      value={{
        ...state,
        // * Metodos
        setSelectedProduct,
        handleAgregarProducto
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
