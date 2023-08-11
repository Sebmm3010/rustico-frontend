import { SecondLayout } from '@/components/layouts';
import { AllPageLoading } from '@/components/ui';

const AdminOrdersPage = () => {
  return (
    <SecondLayout
      title="Administracion - Ordenes"
      description="Dashboard administrativa de ordenes"
      navLink="/admin/orders"
      navTitle="Administracion"
    >
      <AllPageLoading />
    </SecondLayout>
  );
};

export default AdminOrdersPage;
