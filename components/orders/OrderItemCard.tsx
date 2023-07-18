import { FC, useState } from 'react';
import Image from 'next/image';
import { BiEdit, BiTrash, BiSave } from 'react-icons/bi';
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import { OrderItem } from '@/interfaces';
import { currency } from '@/utils';
import { useAppContext } from '@/hooks';

interface Props {
  item: OrderItem;
}

export const OrderItemCard: FC<Props> = ({ item }) => {
  const { handleEditarCantidad } = useAppContext();
  const [cantidad, setCantidad] = useState(item.cantidad);
  const [editando, setEditando] = useState(false);
  const onSave = () => {
    handleEditarCantidad(cantidad, item.id);
    setEditando(!editando);
  };
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
        {editando && (
          <div className="flex justify-evenly">
            <button
              type="button"
              onClick={() => {
                if (cantidad === 1) return;
                setCantidad(cantidad - 1);
              }}
              className="text-xl font-bold"
            >
              <AiOutlineMinusCircle />
            </button>
            <p className="text-xl font-bold">{cantidad}</p>
            <button
              type="button"
              onClick={() => setCantidad(cantidad + 1)}
              className="text-xl font-bold"
            >
              <AiOutlinePlusCircle />
            </button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-5">
        {!editando ? (
          <button
            type="button"
            onClick={() => setEditando(!editando)}
            className="bg-[#000300] flex px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full lg:w-auto items-center gap-2 border border-black"
          >
            <BiEdit /> Editar
          </button>
        ) : (
          <button
            type="button"
            onClick={onSave}
            className="bg-blue-700 flex px-5 py-2 text-white rounded-md font-bold uppercase shadow-md w-full lg:w-auto items-center gap-2 border border-black"
          >
            <BiSave /> Guardar
          </button>
        )}
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
