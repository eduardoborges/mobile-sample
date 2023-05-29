import React from 'react';
import { View } from 'react-native';
import styles from './Card.styles';
import { CardProps } from './Card.types';

export function Card(props: CardProps) {
  const { children, ...rest } = props;
  const s = styles(props);
  return (
    <View style={s.container}>
      {children}
    </View>
  );
}
