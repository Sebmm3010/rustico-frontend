import { FC } from 'react';
import Image from 'next/image';
import { BiEdit, BiTrash } from 'react-icons/bi';
import { OrderItem } from '@/interfaces';
import { currency } from '@/utils';

interface Props {
  item: OrderItem;
}

export const OrderItemCard: FC<Props> = ({ item }) => {
  return (
    <div className="shadow p-5 mb-3 bg-gray-100 flex gap-10 items-center rounded-lg">
      <div className="md:w-1/6">
        <Image
          className="rounded-lg border border-black shadow-lg"
          width={300}
          height={400}
          alt={`img ${item.titulo}`}
          src={item.imagen}
        />
      </div>
      <div className="md:w-4/6">
        <p className="text-3xl font-bold">{item.titulo}</p>
        <p className="text-xl mt-2 font-bold">Cantidad: {item.cantidad}</p>
        <p className="text-xl mt-2 font-bold text-amber-500">
          Precio: {currency.format(item.precio)}
        </p>
        <p className="text-sm mt-2 font-bold text-gray-700">
          Total: {currency.format(item.precio * item.cantidad)}
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <button
          type="button"
          className="bg-[#000300] flex px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full lg:w-auto items-center gap-2 border border-black"
        >
          {' '}
          <BiEdit /> Editar
        </button>
        <button
          type="button"
          className="bg-[#ff0000] flex px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full lg:w-auto items-center gap-2 border border-black"
        >
          {' '}
          <BiTrash /> elminar
        </button>
      </div>
    </div>
  );
};
