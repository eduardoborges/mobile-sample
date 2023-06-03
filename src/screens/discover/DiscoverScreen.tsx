import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Container, Column, Columns, Typography,
} from '~/components';
import { date, range } from '~/utils';

export default function DiscoverScreen() {
  const navigation = useNavigation();
  // navigation.navigate('DISCOVER_SCREEN');

  return (
    <Container title={`Olá ${date().format('ll')}`}>
      {range(1, 100).map((item) => (
        <Columns key={item}>
          <Column>
            <Typography.H1>
              {item}
              {' '}
              Eduardo Borges AAAA
            </Typography.H1>
          </Column>
        </Columns>
      ))}
    </Container>
  );
}
