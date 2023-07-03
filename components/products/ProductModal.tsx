import { useContext } from 'react';
import Image from 'next/image';
import { OrdersContext, UiContext } from '@/context';
import { IProduct } from '@/interfaces';
import { currency } from '@/utils';

export const ProductModal = () => {
  const { selectedProduct } = useContext(OrdersContext);
  const { toogleModal } = useContext(UiContext);
  const { titulo, imagen, precio, descripcion } = selectedProduct as IProduct;
  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image width={300} height={500} alt={titulo} src={imagen} />
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button type="button" onClick={toogleModal}>
            <svg
              viewBox="0 0 32 32"
              width="20"
              height="20"
              stroke="currentColor"
              fill="currentColor"
            >
              <path d="M32 3.2L28.8 0 16 12.8 3.2 0 0 3.2 12.8 16 0 28.8 3.2 32l12.8-12.8 12.8 12.8 3.2-3.2-12.8-12.8z" />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold">{titulo}</h1>
        <p className="mt-2">{descripcion}</p>
        <p className="mt-5 font-bold text-5xl text-red-950">
          {currency.format(precio)}
        </p>

        {/* Menos y mas */}
        <div className="flex gap-4 mt-5">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <p className="text-3xl">1</p>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
