import { FC } from 'react';
import { IProduct } from '@/interfaces';
import Image from 'next/image';
import { currency } from '@/utils';

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { imagen, titulo, precio } = product;
  return (
    <div className="border-2 rounded-md border-black p-3 bg-white">
      <Image
        className="rounded-md border border-black"
        src={imagen}
        alt={titulo}
        width={400}
        height={400}
      />
      <div className="p-5">
        <h3 className="text-2xl font-bold">{titulo}</h3>
        <p className="mt-5 font  text-4xl text-red-950">
          {currency.format(precio)}
        </p>
      </div>
    </div>
  );
};
