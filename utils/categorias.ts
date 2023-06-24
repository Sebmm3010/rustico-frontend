import { Categoria } from '@/interfaces';
import {
  alitas,
  asados,
  bebidas,
  desayuno,
  entradas,
  familiar,
  hamburguesa,
  mariscos
} from '@/public/assets';
import { StaticImageData } from 'next/image';

export interface ICategotias {
  name: Titulos;
  icon: StaticImageData;
  link: Categoria;
}

type Titulos =
  | 'Desayuno'
  | 'Entradas'
  | 'Asados'
  | 'Mariscos'
  | 'Alitas'
  | 'Hamburguesa'
  | 'Familiares'
  | 'Bebidas';

export const categorias: ICategotias[] = [
  {
    name: 'Desayuno',
    icon: desayuno,
    link: 'desayuno'
  },
  {
    name: 'Entradas',
    icon: entradas,
    link: 'entrada'
  },
  {
    name: 'Asados',
    icon: asados,
    link: 'asado'
  },
  {
    name: 'Mariscos',
    icon: mariscos,
    link: 'mariscos'
  },
  {
    name: 'Alitas',
    icon: alitas,
    link: 'alitas'
  },
  {
    name: 'Hamburguesa',
    icon: hamburguesa,
    link: 'hamburguesa'
  },
  {
    name: 'Familiares',
    icon: familiar,
    link: 'familiar'
  },
  {
    name: 'Bebidas',
    icon: bebidas,
    link: 'bebida'
  }
];
