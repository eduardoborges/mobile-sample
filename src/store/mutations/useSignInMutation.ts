import { useMutation } from 'react-query';
import z from 'zod';
import { q } from '~/services';
import { wait } from '~/utils';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export function useSignInMutation() {
  return useMutation(async (input: z.infer<typeof signInSchema>) => {
    //
    const { email, password } = signInSchema.parse(input);

    const data = await wait({
      email,
      password,
    }, 1000);

    return data;
  }, {
    onMutate(variables) {
      const prev = q.getQueryData(['AUTH']);
      q.cancelQueries(['AUTH']);
      q.setQueryData(['AUTH'], () => ({
        ...prev!,
        user: {
          id: 1,
          name: 'John Doe',
          email: variables.email,
        },
      }));
    },
  });
}
