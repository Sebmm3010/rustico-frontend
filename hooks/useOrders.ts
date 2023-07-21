import { IFullOrder } from '@/interfaces';
import useSWR, { SWRConfiguration } from 'swr';

export const useOrders = (config: SWRConfiguration = {}) => {
  const { data, error, isLoading } = useSWR<IFullOrder[]>(
    `${process.env.NEXT_PUBLIC_API}/orders/pending`,
    config
  );

  return {
    orders: data,
    isError: error,
    isLoading
  };
};
