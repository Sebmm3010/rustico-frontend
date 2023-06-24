import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { categorias } from '@/utils';
import rusticoApi from '@/apis/rusitcoApi';
import { IProduct } from '@/interfaces';

interface Props {
  products: IProduct[];
}

const Categoria: NextPage<Props> = ({ products }) => {
  return <div>{products[0].titulo}</div>;
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
  return {
    props: { products: data },
    revalidate: 60 * 60 * 24
  };
};

export default Categoria;
