import { useOrders } from '@/hooks';
import { FullOrder } from '@/components/cocina';
import { SecondLayout } from '@/components/layouts';
import { CardSkeleton } from '@/components/ui';

const CocinaPage = () => {
  const { orders, isError, isLoading } = useOrders({ refreshInterval: 100 });
  return (
    <SecondLayout
      title="Mr. Rustico - Cocina"
      description="Mr. Rustico pagina de cocina"
    >
      <h1 className="text-4xl text-white font-bold mt-5">Cocina</h1>
      <p className="text-xl text-white my-9">Revisar ordenes</p>
      {isLoading ? (
        <CardSkeleton />
      ) : isError ? (
        <h1 className="text-white">Error al cargar los productos</h1>
      ) : orders?.length === 0 ? (
        <h1 className="text-white">No hay ordenes pendientes</h1>
      ) : (
        orders?.map((order) => <FullOrder order={order} key={order.id} />)
      )}
    </SecondLayout>
  );
};

export default CocinaPage;
