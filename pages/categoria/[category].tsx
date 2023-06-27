import { useContext } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { categorias } from '@/utils';
import rusticoApi from '@/apis/rusitcoApi';
import { IProduct } from '@/interfaces';
import { MainLayout } from '@/components/layouts';
import { UiContext } from '@/context';
import { ProductsList } from '@/components/products';

interface Props {
  products: IProduct[];
}

const Categoria: NextPage<Props> = ({ products }) => {
  const { actualCategory } = useContext(UiContext);
  return (
    <MainLayout
      title={`Mr. Rustico - ${products[0].categoria}`}
      description="Pagina de categoria de productos"
    >
      <h1 className="text-4xl font-black">{actualCategory.toUpperCase()}</h1>
      <ProductsList products={products} />
    </MainLayout>
  );
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const categoryPaths = categorias.map((categoria) => categoria.link);

  return {
    paths: categoryPaths.map((path) => ({
      params: { category: path }
    })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params as { category: string };
  const { data } = await rusticoApi.get(`/products/categoria/${category}`); // your fetch function here
  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
  return {
    props: { products: data },
    revalidate: 60 * 60 * 24
  };
};

export default Categoria;
