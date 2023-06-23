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
  name: Categorias;
  icon: StaticImageData;
}

type Categorias =
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
    icon: desayuno
  },
  {
    name: 'Entradas',
    icon: entradas
  },
  {
    name: 'Asados',
    icon: asados
  },
  {
    name: 'Mariscos',
    icon: mariscos
  },
  {
    name: 'Alitas',
    icon: alitas
  },
  {
    name: 'Hamburguesa',
    icon: hamburguesa
  },
  {
    name: 'Familiares',
    icon: familiar
  },
  {
    name: 'Bebidas',
    icon: bebidas
  }
];
