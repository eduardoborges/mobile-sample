import React from 'react';

import { Button, Container, Tab } from '~/components';
import { ScreenProps, routes } from '~/routes';

export default function SignInScreen({ navigation }: ScreenProps<typeof routes.AUTH.SIGNIN>) {
  return (
    <Container title="Login">
      {/* <Tab /> */}
      <Button onPress={() => navigation.navigate(routes.HOME, { id: 1 })}>MOdal</Button>
    </Container>
  );
}
