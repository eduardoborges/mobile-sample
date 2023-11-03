import React from 'react';
import {
  Button, Flex, Heading, Input,
} from '~/components';
import { LoginScreenProps } from '~/routes/router.types';

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const debugLayout = false;

  return (
    <Flex vCentered centered vertical m={20} debug={debugLayout}>
      <Flex vEnd centered full gap={15} debug={debugLayout}>
        <Flex vEnd centered full debug={debugLayout}>
          <Input placeholder="Email" />
        </Flex>
        <Flex vEnd centered full debug={debugLayout}>
          <Input placeholder="Password" secureTextEntry />
        </Flex>
      </Flex>
      <Flex centered vCentered debug={debugLayout}>
        <Button onPress={() => navigation.navigate('Register')}>Navigate to Login</Button>
      </Flex>
    </Flex>
  );
}
