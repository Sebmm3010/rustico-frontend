import { MainLayout } from '@/components/layouts';
import { useProducts } from '@/hooks';

const HomePage = () => {
  const { isLoading, products } = useProducts('products');
  return (
    <MainLayout
      title="Mr. Rustico - Inicio"
      description="Inicio de aplicacion Mr. Rustico"
    >
      {isLoading ? <p>Cargando</p> : <p>{'hola'}</p>}
    </MainLayout>
  );
};

export default HomePage;
