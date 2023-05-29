import { QueryClient } from 'react-query';

export const q = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      retry: 3,
    },
  },
});

export default q;
