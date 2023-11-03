import React from 'react';
import { Button, Flex, Heading } from '~/components';
import { RegisterScreenProps } from '~/routes/router.types';

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
  const debugLayout = false;

  return (
    <Flex vCentered centered vertical debug={debugLayout}>
      <Flex vEnd centered full debug={debugLayout}>
        <Heading>Cadastro</Heading>
      </Flex>
      <Flex centered vCentered debug={debugLayout}>
        <Button onPress={() => navigation.navigate('Home')}>Navigate to Home</Button>
      </Flex>
    </Flex>
  );
}
