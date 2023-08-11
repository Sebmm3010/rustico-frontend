import { IFullOrder } from '@/interfaces';
import useSWR, { SWRConfiguration } from 'swr';

export const useOrders = (url?: string, config: SWRConfiguration = {}) => {
  const { data, error, isLoading } = useSWR<IFullOrder[]>(
    `${process.env.NEXT_PUBLIC_API}/orders/${url || ''}`,
    config
  );

  return {
    orders: data,
    isError: error,
    isLoading
  };
};
