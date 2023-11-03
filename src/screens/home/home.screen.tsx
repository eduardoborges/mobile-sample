import React from 'react';
import {
  Button, Flex, Heading,
} from '~/components';
import { HomeScreenProps } from '~/routes/router.types';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <Flex vCentered centered vertical debug>
      <Flex vEnd end debug full>
        <Heading>Home</Heading>
      </Flex>
      <Flex centered vCentered debug>
        <Button onPress={() => navigation.navigate('Login')}>Navigate to Login</Button>
      </Flex>
    </Flex>
  );
}
