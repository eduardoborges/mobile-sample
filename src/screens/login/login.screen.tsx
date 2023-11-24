import { CheckCheck } from 'lucide-react-native';
import React from 'react';
import {
  Button, Input, Flex, useToast,
} from '~/components';
import { LoginScreenProps } from '~/routes/router.types';

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const debugLayout = false;

  const toast = useToast();

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
          <Button onPress={() => {
            toast.add({
              title: `Title ${Date.now()}`,
              description: 'Description',
              action: 'Action',
              icon: CheckCheck,
              preset: 'success',
              onAction: () => {},
            });
          }}
          >
            Navigate to Login

          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
