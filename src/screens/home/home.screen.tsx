import React from 'react';
import {
  Button, Column, Columns, Heading,
} from '~/components';
import { HomeScreenProps } from '~/routes/router.types';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <Columns vcentered centered>
      <Column>
        <Heading>Home</Heading>
        <Button onPress={() => navigation.navigate('Login')}>Navigate to Login</Button>
      </Column>
    </Columns>
  );
}
