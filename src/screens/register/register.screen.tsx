import React from 'react';
import { Heading, Container } from '~/components';
import { RegisterScreenProps } from '~/routes/router.types';

export default function RegisterScreen(props: RegisterScreenProps) {
  return (
    <Container>
      <Heading>Sign Up</Heading>
    </Container>
  );
}
