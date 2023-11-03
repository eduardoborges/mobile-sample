import React from 'react';
import {
  Button, Flex, Heading,
} from '~/components';
import { HomeScreenProps } from '~/routes/router.types';
import { useHello } from '~/store';

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { data: hello, isLoading: isLoadingHello } = useHello();

  const debugLayout = true;
  const debugColor = '';

  return (
    <Flex vCentered centered vertical debug={debugLayout} debugColor={debugColor}>
      <Flex vEnd centered full debug={debugLayout} debugBg={debugLayout} debugColor={debugColor}>
        <Heading>Home Screen</Heading>
      </Flex>
      <Flex centered vCentered debug={debugLayout} debugColor={debugColor}>
        <Button onPress={() => navigation.navigate('Login')}>Navigate to Login</Button>
      </Flex>
    </Flex>
  );
}
