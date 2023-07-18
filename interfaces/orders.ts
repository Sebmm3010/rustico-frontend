// Generated by https://quicktype.io

export interface IOrder {
  orderItems: OrderItem[];
  orderSubTotal: number;
  total: number;
  nota?: string;
  mesa?: number;
}

export interface OrderItem {
  id: string;
  titulo: string;
  imagen: string;
  precio: number;
  cantidad: number;
  subTotal: number;
}
