import { useQuery } from 'react-query';
import { q } from '~/services';
import { wait } from '~/utils';

export function useAuth() {
  return useQuery(['AUTH'], async () => {
    //
    const data = await wait({
      user: {
        id: 1,
        name: 'John Doe',
        email: 'jhon@mail.com',
      },
    }, 2000);

    return data;
  });
}
