import { DataTable, usersColumns } from '@/components/admin';
import { SecondLayout } from '@/components/layouts';
import { AllPageLoading } from '@/components/ui';
import { useAdminData } from '@/hooks';
import { useRouter } from 'next/router';

const AdminUsersPage = () => {
  const { data, isLoading } = useAdminData('users', { refreshInterval: 100 });
  const router = useRouter();
  return (
    <SecondLayout
      title="Administracion - Usuarios"
      description="Dashboard administrativa de usuarios"
      navLink="/admin/users"
      navTitle="Administracion"
    >
      {isLoading ? (
        <AllPageLoading />
      ) : (
        <div className="container mx-auto py-10 rounded-lg">
          <DataTable
            data={data}
            columns={usersColumns}
            createNew={true}
            filterBy="fullName"
            filterValue="nombre"
            url="/admin/users/newuser"
          />
        </div>
      )}
    </SecondLayout>
  );
};

export default AdminUsersPage;
