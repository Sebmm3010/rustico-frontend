import { DataTable, usersColumns } from '@/components/admin';
import { SecondLayout } from '@/components/layouts';
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
        <h1 className="m-auto text-white">Cargando...</h1>
      ) : (
        <div className="container mx-auto py-10 rounded-lg">
          <DataTable
            data={data}
            columns={usersColumns}
            place="/admin/users/newuser"
          />
        </div>
      )}
    </SecondLayout>
  );
};

export default AdminUsersPage;
