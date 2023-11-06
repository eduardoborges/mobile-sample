import React from 'react';
import { Flex } from 'react-native-flex';
import {
  Button, Input,
} from '~/components';
import { LoginScreenProps } from '~/routes/router.types';

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const debugLayout = true;

  return (
    <Flex vCentered vertical p={20} debug={debugLayout}>
      <Flex vEnd centered full gap={15} debug={debugLayout} />
      <Flex centered vertical vCentered debug={debugLayout}>
        <Flex vEnd centered full debug={debugLayout}>
          <Input placeholder="Email" />
        </Flex>
        <Flex vEnd centered full debug={debugLayout}>
          <Input placeholder="Password" secureTextEntry />
        </Flex>
        <Flex vEnd centered full debug={debugLayout}>
          <Button onPress={() => navigation.navigate('Register')}>Navigate to Login</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
