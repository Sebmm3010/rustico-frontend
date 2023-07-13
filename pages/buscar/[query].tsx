import { NextPage, GetServerSideProps } from 'next';
import { MainLayout } from '@/components/layouts';
import rusticoApi from '@/apis/rusitcoApi';
import { IProduct } from '@/interfaces';
import { ProductsList } from '@/components/products';

interface Props {
  products: IProduct[];
  validateProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ query, validateProducts, products }) => {
  return (
    <MainLayout
      title={`Mr. Rustico - Buscar: ${query}`}
      description="Pagina de busqueda Mr. Rustico"
    >
      {validateProducts ? (
        <h1 className="text-4xl font-black text-red-950 mb-3">
          {' '}
          Productos con: {query.toUpperCase()}
        </h1>
      ) : (
        <h1 className="text-4xl font-black text-red-950 mb-3">
          No se encontraron productos con:{' '}
          <span className="underline">{query.toUpperCase()}</span>
        </h1>
      )}
      <ProductsList products={products} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: true
      }
    };
  }

  const { data } = await rusticoApi.get(`/products?search=${query}`);
  let products = data;
  const validateProducts = data.length > 0;
  if (!validateProducts) {
    const { data } = await rusticoApi.get('/products');
    products = data;
  }
  return {
    props: {
      products,
      validateProducts,
      query
    }
  };
};

export default SearchPage;
