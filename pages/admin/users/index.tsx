import { AdminTable, usersColumns } from '@/components/admin';
import { SecondLayout } from '@/components/layouts';
import { useAdminData } from '@/hooks';

const AdminUsersPage = () => {
  const { data, isLoading } = useAdminData('users', { refreshInterval: 100 });
  return (
    <SecondLayout
      title="Administracion - Usuarios"
      description="Dashboard administrativa de usuarios"
    >
      {isLoading ? (
        <h1 className="m-auto text-white">Cargando...</h1>
      ) : (
        <div className="container mx-auto py-10 rounded-lg">
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white font-bold px-3 rounded-lg my-2">
              + Nuevo usuario
            </button>
          </div>
          <AdminTable data={data} columns={usersColumns} />
        </div>
      )}
    </SecondLayout>
  );
};

export default AdminUsersPage;
