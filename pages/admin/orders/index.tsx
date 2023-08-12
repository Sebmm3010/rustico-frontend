import { DataTable, ordersColumns } from '@/components/admin';
import { SecondLayout } from '@/components/layouts';
import { AllPageLoading } from '@/components/ui';
import { useOrders } from '@/hooks';
import { IFullOrder } from '@/interfaces';

const AdminOrdersPage = () => {
  const { orders, isError, isLoading } = useOrders(undefined, {
    refreshInterval: 100
  });
  return (
    <SecondLayout
      title="Administracion - Ordenes"
      description="Dashboard administrativa de ordenes"
      navLink="/admin/orders"
      navTitle="Administracion"
    >
      {isLoading ? (
        <AllPageLoading />
      ) : (
        <div className="container mx-auto py-10 rounded-lg">
          <DataTable
            data={orders as IFullOrder[]}
            columns={ordersColumns}
            createNew={false}
            filterBy="createdAt"
            filterValue="fecha"
          />
        </div>
      )}
    </SecondLayout>
  );
};

export default AdminOrdersPage;
