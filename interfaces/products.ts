// Generated by https://quicktype.io

export interface IProduct {
  id: string;
  titulo: string;
  precio: string;
  descripcion: string;
  slug: string;
  categoria: Categoria;
  tags: string[];
  imagen: string;
  inStock: boolean;
  createdAt: string;
  updatedAt: string;
}

export type Categoria =
  | 'desayuno'
  | 'entrada'
  | 'asado'
  | 'mariscos'
  | 'alitas'
  | 'hamburguesa'
  | 'familiar'
  | 'bebida';