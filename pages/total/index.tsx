import { useForm } from 'react-hook-form';
import { MainLayout } from '@/components/layouts';
import { useAppContext } from '@/hooks';
import { currency } from '@/utils';

interface FormData {
  mesa: string;
  nota: string;
}

const TotalPage = () => {
  const { actualOrder, orderItems, handleOrdenFinal, toogleOrderModal } =
    useAppContext();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();
  const onSubmit = ({ mesa, nota }: FormData) => {
    handleOrdenFinal(mesa, nota);
    toogleOrderModal();
  };
  return (
    <MainLayout
      title="Mr. Rustico - Confirmar pedido"
      description="Resumen de ordenes"
    >
      <h1 className="text-4xl text-white font-bold">Confirmar y total</h1>
      <p className="text-xl text-white my-9">Confirmar orden</p>
      {orderItems.length === 0 ? (
        <p className="text-center text-2xl text-white">
          No hay elementos en la orden
        </p>
      ) : (
        <form
          className="bg-gray-100 p-3 rounded-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label
              htmlFor="mesa"
              className="block uppercase text-slate-800 font-bold text-xl"
            >
              Mesa
            </label>
            <input
              {...register('mesa', {
                required: 'El número de mesa es obligatorio',
                pattern: {
                  value: /^[0-9]+$/,
                  message: 'Ingrese solo números'
                }
              })}
              id="mesa"
              type="number"
              className={`bg-gray-300 border ${
                errors.mesa ? 'border-red-600' : 'border-black'
              } w-full mt-3 lg:w-1/3 p-2 rounded-lg`}
              placeholder="Numero de mesa"
            />
            {errors.mesa && (
              <span className="text-xs my-2 text-red-600 font-bold">
                El numero de mesa es obligatorio
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="nota"
              className="block uppercase text-slate-800 font-bold text-xl"
            >
              Nota
            </label>
            <textarea
              {...register('nota')}
              id="nota"
              className="bg-gray-300 border border-black  w-full mt-3 lg:w-1/3 p-2 rounded-lg"
              placeholder="Nota adicional"
            />
          </div>
          <div className="mt-9">
            <p className="text-slate-800">
              Sub-total:{' '}
              <span className=" text-black">
                {currency.format(actualOrder!.orderSubTotal)}
              </span>
            </p>
            <p className="font-bold text-2xl">
              Total a pagar:{' '}
              <span className="text-black">
                {currency.format(actualOrder!.total)}
              </span>
            </p>
          </div>
          <div className="mt-5">
            <input
              type="submit"
              value="Confirmar orden"
              className="bg-red-950 cursor-pointer w-full lg:w-auto px-5 py-2 rounded uppercase text-white text-center"
            />
          </div>
        </form>
      )}
    </MainLayout>
  );
};

export default TotalPage;
