import { IProduct } from '@/interfaces';
import { createContext } from 'react';

interface ContextProps {
  selectedProduct: IProduct | null;
  setSelectedProduct: (product: IProduct) => void;
}

export const OrdersContext = createContext({} as ContextProps);
