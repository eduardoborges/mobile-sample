import React, { useState } from 'react';
import { Easing, FadeInDown } from 'react-native-reanimated';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView } from 'react-native';
import {
  Container, Typography, Button, Modal,
} from '~/components';
import { RootStackParamList, routes } from '~/routes';

type Props = NativeStackScreenProps<RootStackParamList, typeof routes.HOME>;

export default function HomeScreen(props: Props) {
  const [modalVisible, setModal] = useState(false);

  return (
    <Container title="Home Page">
      {Array.from({ length: 150 }).map((_, index) => (
        <Typography.H1 entering={FadeInDown.easing(Easing.elastic()).duration(600).delay(index * 50)}>
          Home Screen
        </Typography.H1>
      ))}
    </Container>
  );
}
