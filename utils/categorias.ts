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

interface ICategotias {
  name:
    | 'Desayuno'
    | 'Entrada'
    | 'Asados'
    | 'Mariscos'
    | 'Alitas'
    | 'Hamburguesa'
    | 'Familiares'
    | 'Bebidas';
  icon: StaticImageData;
}
export const categorias: ICategotias[] = [
  {
    name: 'Desayuno',
    icon: desayuno
  },
  {
    name: 'Entrada',
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
