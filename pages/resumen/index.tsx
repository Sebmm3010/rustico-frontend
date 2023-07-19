import { useRouter } from 'next/router';
import { useAppContext } from '@/hooks';
import { MainLayout } from '@/components/layouts';
import { OrderItemCard } from '@/components/orders';

const ResumenPage = () => {
  const { orderItems } = useAppContext();
  const router = useRouter();
  return (
    <MainLayout
      title="Mr. Rustico - Resumen de la orden"
      description="Resumen de ordenes"
    >
      <h1 className="text-4xl text-white font-bold">Resumen</h1>
      <p className="text-xl text-white my-9">Revisar pedido</p>
      {orderItems.length === 0 ? (
        <p className="text-center text-2xl text-white">
          No hay elementos en la orden
        </p>
      ) : (
        <div>
          {orderItems.map((item) => (
            <OrderItemCard key={item.id} item={item} />
          ))}
          <div className="bg-gray-100 flex justify-end items-center rounded-lg p-4 m-2">
            <button
              type="button"
              className="font-bold bg-red-950 text-white rounded-lg p-3"
              onClick={() => router.push('/total')}
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default ResumenPage;
