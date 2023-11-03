import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
    },
  },
});

if (__DEV__) {
  import('react-query-native-devtools').then(({ addPlugin }) => {
    // @ts-ignore
    addPlugin({ queryClient });
  });
}

export default queryClient;
