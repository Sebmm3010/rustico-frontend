import rusticoApi from '@/apis/rusitcoApi';
import { getSession } from 'next-auth/react';
import useSWR, { SWRConfiguration } from 'swr';
export const useAdminData = (url: string, config: SWRConfiguration = {}) => {
  const fetcher = async (url: string) => {
    const session = await getSession();
    return await rusticoApi
      .get(`/admin/${url}`, {
        headers: {
          Authorization: `Bearer ${session?.user.token}`
        }
      })
      .then((res) => res.data);
  };
  const { error, data, isLoading } = useSWR<any>(url, fetcher, config);
  return {
    data,
    isError: error,
    isLoading
  };
};
