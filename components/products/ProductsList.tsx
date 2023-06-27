import { IProduct } from '@/interfaces';
import { ProductCard } from './ProductCard';
import { FC } from 'react';

interface Props {
  products: IProduct[] | undefined;
}
export const ProductsList: FC<Props> = ({ products }) => {
  return (
    <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
