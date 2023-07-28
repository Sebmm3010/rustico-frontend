import { SecondLayout } from '@/components/layouts';
import { useAdminData, useProducts } from '@/hooks';

const ProductsAdminPage = () => {
  const { products, isLoading } = useProducts();
  return (
    <SecondLayout
      title="Administracion - Productos"
      description="Dashboard administrativa de productos"
      navLink="/admin/products"
      navTitle="Administracion"
    >
      <h1>Hola</h1>
    </SecondLayout>
  );
};

export default ProductsAdminPage;
