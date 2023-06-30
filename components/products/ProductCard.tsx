import { FC, useContext } from 'react';
import Image from 'next/image';
import { IProduct } from '@/interfaces';
import { currency } from '@/utils';
import { OrdersContext } from '@/context';

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const { setSelectedProduct } = useContext(OrdersContext);
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
        <button
          className="bg-red-950 hover:bg-red-800 text-white w-full mt-5 p-3 uppercase font-bold"
          type="button"
          onClick={() => setSelectedProduct(product)}
        >
          Agregar
        </button>
      </div>
    </div>
  );
};
