import { DataTable, productsColumns } from '@/components/admin';
import { SecondLayout } from '@/components/layouts';
import { useAdminData, useProducts } from '@/hooks';
import { IProduct } from '@/interfaces';

const ProductsAdminPage = () => {
  const { products, isLoading } = useProducts('products');
  return (
    <SecondLayout
      title="Administracion - Productos"
      description="Dashboard administrativa de productos"
      navLink="/admin/products"
      navTitle="Administracion"
    >
      {isLoading ? (
        <h1 className="m-auto text-white">Cargando...</h1>
      ) : (
        <div className="container mx-auto py-10 rounded-lg">
          <DataTable
            data={products as IProduct[]}
            columns={productsColumns}
            place="products/edit/newProduct"
          />
        </div>
      )}
    </SecondLayout>
  );
};

export default ProductsAdminPage;
