import { IOrder, IProduct, OrderItem } from '@/interfaces';
import { createContext } from 'react';

interface ContextProps {
  selectedProduct: IProduct | null;
  actualOrder: IOrder | null;
  orderItems: OrderItem[];
  // * Metodos
  setSelectedProduct: (product: IProduct) => void;
  handleAgregarProducto: (producto: IProduct, cantidad: number) => void;
  handleEditarCantidad: (newCantidad: number, id: string) => void;
}

export const OrdersContext = createContext({} as ContextProps);
