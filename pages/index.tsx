import { MainLayout } from '@/components/layouts';
import { ProductsList } from '@/components/products';
import { useProducts } from '@/hooks';

const HomePage = () => {
  const { isLoading, products } = useProducts('products');
  return (
    <MainLayout
      title="Mr. Rustico - Inicio"
      description="Inicio de aplicacion Mr. Rustico"
    >
      {isLoading ? <p>Cargando</p> : <ProductsList products={products} />}
    </MainLayout>
  );
};

export default HomePage;
