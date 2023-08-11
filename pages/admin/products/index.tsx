import { DataTable, productsColumns } from '@/components/admin';
import { SecondLayout } from '@/components/layouts';
import { AllPageLoading } from '@/components/ui';
import { useProducts } from '@/hooks';
import { IProduct } from '@/interfaces';

const ProductsAdminPage = () => {
  const { products, isLoading } = useProducts('products', {
    refreshInterval: 100
  });
  return (
    <SecondLayout
      title="Administracion - Productos"
      description="Dashboard administrativa de productos"
      navLink="/admin/products"
      navTitle="Administracion"
    >
      {isLoading ? (
        // <h1 className="m-auto text-white">Cargando...</h1>
        <AllPageLoading />
      ) : (
        <div className="container mx-auto py-10 rounded-lg">
          <DataTable
            data={products as IProduct[]}
            columns={productsColumns}
            createNew={true}
            filterBy="titulo"
            filterValue="nombre"
            url="/admin/products/edit/new"
          />
        </div>
      )}
    </SecondLayout>
  );
};

export default ProductsAdminPage;
