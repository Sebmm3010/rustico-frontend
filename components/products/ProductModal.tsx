import { useState } from 'react';
import Image from 'next/image';
import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineClose
} from 'react-icons/ai';
import { IProduct } from '@/interfaces';
import { currency } from '@/utils';
import { useAppContext } from '@/hooks';

export const ProductModal = () => {
  const { selectedProduct, toogleModal, isLogged, handleAgregarProducto } =
    useAppContext();
  const [cantidad, setCantidad] = useState<number>(1);
  const { titulo, imagen, precio, descripcion } = selectedProduct as IProduct;
  const onAddProduct = () => {
    if (!isLogged) return;
    handleAgregarProducto(selectedProduct!, cantidad);
  };
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          className="rounded-md shadow-md border-black border-2"
          width={300}
          height={500}
          alt={titulo}
          src={imagen}
        />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button type="button" onClick={toogleModal}>
            <AiOutlineClose className="font-bold text-3xl" />
          </button>
        </div>
        <h1 className="text-3xl font-bold">{titulo}</h1>
        <p className="mt-2">{descripcion}</p>
        <p className="mt-5 font-bold text-5xl text-red-950">
          {currency.format(precio)}
        </p>

        {/* Menos y mas */}
        <div className="flex gap-4 mt-5">
          {/* Menos */}
          <button
            type="button"
            onClick={() => {
              if (cantidad === 1) return;
              setCantidad(cantidad - 1);
            }}
          >
            <AiOutlineMinusCircle className="text-2xl" />
          </button>

          <p className="text-3xl">{cantidad}</p>
          {/* Mas */}
          <button type="button" onClick={() => setCantidad(cantidad + 1)}>
            <AiOutlinePlusCircle className="text-2xl" />
          </button>
        </div>

        <button
          type="button"
          className={`text-white p-2 mt-3 font-bold rounded-md uppercase ${
            isLogged ? 'bg-red-950 md:hover:bg-red-800' : 'bg-red-400'
          }`}
          disabled={!isLogged}
          onClick={onAddProduct}
        >
          Agregar a la orden
        </button>
      </div>
    </div>
  );
};
