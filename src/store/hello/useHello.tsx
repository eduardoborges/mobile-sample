import { useQuery } from '@tanstack/react-query';
import { wait } from '~/utils';

export const USE_HELLO_QUERY_KEY = 'USE_HELLO';

export function useHello() {
  const queryFn = async () => {
    wait(1000);
    return 'Hello World';
  };
  return useQuery({
    queryKey: [USE_HELLO_QUERY_KEY],
    queryFn,
    refetchInterval: 2000,
    cacheTime: 1000,
  });
}
