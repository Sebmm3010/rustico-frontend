import { IProduct } from '@/interfaces';
import useSWR, { SWRConfiguration } from 'swr';

export const useProducts = (
  url: string = '',
  config: SWRConfiguration = {}
) => {
  const { data, error, isLoading } = useSWR<IProduct[]>(
    `${process.env.NEXT_PUBLIC_BD}/${url}`,
    config
  );

  return {
    products: data,
    isError: error,
    isLoading
  };
};
