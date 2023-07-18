import { FC, useReducer, ReactNode, useEffect } from 'react';
import { OrdersContext, ordersReducer } from '.';
import { IProduct } from '@/interfaces';
import { IOrder, OrderItem } from '../../interfaces/orders';

export interface OrdersState {
  selectedProduct: IProduct | null;
  actualOrder: IOrder | null;
  orderItems: OrderItem[];
  isEditando: boolean;
}

const Orders_INITIAL_STATE: OrdersState = {
  selectedProduct: null,
  actualOrder: null,
  orderItems: [],
  isEditando: false
};

interface Props {
  children: ReactNode;
}
export const OrdersProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(ordersReducer, Orders_INITIAL_STATE);

  useEffect(() => {
    const iva = Number(process.env.NEXT_PUBLIC_IVA);
    const total = state.orderItems.reduce((prev, item) => {
      return prev + item.cantidad * item.precio;
    }, 0);
    const orderSubTotal = total - total * iva;
    const orden = {
      orderItems: state.orderItems,
      orderSubTotal,
      total
    };
    dispatch({ type: '[Orders]- Ordern actual', payload: orden });
  }, [state.orderItems]);

  // ? Productro actual en el modal
  const setSelectedProduct = (product: IProduct) => {
    dispatch({ type: '[Orders]-Set selected product', payload: product });
  };

  // ? Orden
  const handleAgregarProducto = (
    { id, precio, titulo, imagen }: IProduct,
    cantidad: number
  ) => {
    const orderItem = {
      id,
      titulo,
      imagen,
      precio,
      cantidad,
      subTotal: cantidad * precio
    };
    const productInOrder = state.orderItems.some(
      (item) => item.id === orderItem.id
    );
    if (productInOrder) {
      const newOrderItems = state.orderItems.map((item) =>
        item.id === orderItem.id ? orderItem : item
      );
      dispatch({
        type: '[Orders]- Actualizar order items',
        payload: newOrderItems
      });
    } else {
      dispatch({
        type: '[Orders]- Actualizar order items',
        payload: [...state.orderItems, orderItem]
      });
    }
  };
  const handleEditarCantidad = (newCantidad: number, id: string) => {
    const editedOrderItems = state.orderItems.map((item) => {
      if (item.id === id) {
        return { ...item, cantidad: newCantidad };
      } else {
        return item;
      }
    });
    dispatch({
      type: '[Orders]- Actualizar order items',
      payload: editedOrderItems
    });
  };
  return (
    <OrdersContext.Provider
      value={{
        ...state,
        // * Metodos
        setSelectedProduct,
        handleAgregarProducto,
        handleEditarCantidad
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};
