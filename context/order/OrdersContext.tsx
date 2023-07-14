import { IOrder, IProduct } from '@/interfaces';
import { createContext } from 'react';

interface ContextProps {
  selectedProduct: IProduct | null;
  actualOrder: IOrder | null;
  // * Metodos
  setSelectedProduct: (product: IProduct) => void;
  handleAgregarProducto: (producto: IProduct, cantidad: number) => void;
}

export const OrdersContext = createContext({} as ContextProps);
