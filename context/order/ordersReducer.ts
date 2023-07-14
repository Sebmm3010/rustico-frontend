import { IOrder, IProduct, OrderItem } from '@/interfaces';
import { OrdersState } from '.';

type OrdersActionType =
  | {
      type: '[Orders]-Set selected product';
      payload: IProduct;
    }
  | {
      type: '[Orders]- Ordern actual';
      payload: IOrder;
    }
  | {
      type: '[Orders]- Actualizar order items';
      payload: OrderItem[];
    };

export const ordersReducer = (
  state: OrdersState,
  action: OrdersActionType
): OrdersState => {
  switch (action.type) {
    case '[Orders]-Set selected product':
      return {
        ...state,
        selectedProduct: action.payload
      };
    case '[Orders]- Actualizar order items':
      return {
        ...state,
        orderItems: action.payload
      };
    case '[Orders]- Ordern actual':
      return {
        ...state,
        actualOrder: action.payload
      };
    default:
      return state;
  }
};
