import { MainLayout } from '@/components/layouts';
import { OrderItemCard } from '@/components/orders';
import { useAppContext } from '@/hooks';

const ResumenPage = () => {
  const { orderItems } = useAppContext();
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
        orderItems.map((item) => <OrderItemCard key={item.id} item={item} />)
      )}
    </MainLayout>
  );
};

export default ResumenPage;
