import { IOrder, IProduct, OrderItem } from '@/interfaces';
import { OrdersState } from '.';

type OrdersActionType =
  | {
      type: '[Orders]-Set selected product';
      payload: IProduct;
    }
  | {
      type: '[Orders] - settear Orden actual';
      payload: IOrder;
    }
  | {
      type: '[Orders]- Actualizar order items';
      payload: OrderItem[];
    }
  | {
      type: '[Orders] - Resetear estado';
      payload: OrdersState;
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
    case '[Orders] - settear Orden actual':
      return {
        ...state,
        actualOrder: action.payload
      };
    case '[Orders] - Resetear estado':
      return {
        ...state,
        actualOrder: action.payload.actualOrder,
        orderItems: action.payload.orderItems,
        selectedProduct: action.payload.selectedProduct
      };
    default:
      return state;
  }
};
