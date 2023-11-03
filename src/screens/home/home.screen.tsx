import React from 'react';
import {
  Button, Flex, Heading,
} from '~/components';
import { HomeScreenProps } from '~/routes/router.types';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <Flex vcentered centered direction="horizontal" debug>
      <Flex centered vcentered debug>
        <Heading>Home</Heading>
      </Flex>
      <Flex centered vcentered debug>
        <Button onPress={() => navigation.navigate('Login')}>Navigate to Login</Button>
      </Flex>
    </Flex>
  );
}
