import { FC } from 'react';
import Image from 'next/image';
import { useAppContext } from '@/hooks';
import { IFullOrder } from '@/interfaces';
import rusticoApi from '@/apis/rusitcoApi';

interface Props {
  order: IFullOrder;
}

export const FullOrder: FC<Props> = ({ order }) => {
  const { user } = useAppContext();
  const { mesa, user: userOrder, nota, id, orderItems } = order;
  const handleReady = async () => {
    await rusticoApi.put<IFullOrder>(
      `/orders/${id}`,
      { isReady: true },
      {
        headers: {
          Authorization: `Bearer ${user?.token}`
        }
      }
    );
  };
  return (
    <div className="border p-10 space-y-5 bg-gray-200 rounded-lg my-3">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Mesa: {mesa}</h1>
        <button
          type="button"
          className="bg-red-600 text-white font-bold p-3 rounded-lg"
          onClick={handleReady}
        >
          Finalizar
        </button>
      </div>
      <p className="text-lg my-9 row-start-2">Mesero: {userOrder.fullName}</p>
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
