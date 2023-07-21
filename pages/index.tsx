import { MainLayout } from '@/components/layouts';
import { ProductsList } from '@/components/products';
import { Loading } from '@/components/ui';
import { useProducts } from '@/hooks';

const HomePage = () => {
  const { isLoading, products, isError } = useProducts('products');
  return (
    <MainLayout
      title="Mr. Rustico - Inicio"
      description="Inicio de aplicacion Mr. Rustico"
    >
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <h1 className="text-white">Error al cargar los productos</h1>
      ) : (
        <ProductsList products={products} />
      )}
    </MainLayout>
  );
};

export default HomePage;
