import { IFullOrder } from '@/interfaces';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
  order: IFullOrder;
}

export const FullOrder: FC<Props> = ({ order }) => {
  const { mesa, user, nota, id, orderItems } = order;
  return (
    <div className="border p-10 space-y-5 bg-gray-200 rounded-lg my-3">
      <h1 className="text-2xl font-bold">Mesa: {mesa}</h1>
      <p className="text-lg my-9">Mesero: {user.fullName}</p>
      <div>
        {orderItems.map((item) => (
          <div
            className="py-3 flex border-b last-of-type:border-0 items-center"
            key={item.id}
          >
            <div className="w-32">
              <Image
                src={item.imagen}
                alt={item.titulo}
                width={400}
                height={500}
                className="rounded-lg border border-black shadow-lg"
              />
            </div>
            <div className="p-5 space-y-2">
              <h4 className="text-xl font-bold">{item.titulo}</h4>
              <p className="text-lg font-bold">Cantidad: {item.cantidad}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between my-10">
        {nota && (
          <p className="mt-5 text-xl">
            <span className="font-black">Nota:</span> {nota}
          </p>
        )}
      </div>
    </div>
  );
};
