import { IFullOrder } from '@/interfaces';
import useSWR, { SWRConfiguration } from 'swr';

export const useOrders = (config: SWRConfiguration = {}) => {
  const { data, error, isLoading } = useSWR<IFullOrder[]>(
    `${process.env.NEXT_PUBLIC_API}/orders`,
    config
  );

  return {
    orders: data,
    isError: error,
    isLoading
  };
};
