import React from 'react';

import {
  TouchableOpacity, TouchableOpacityProps, StyleSheet, Text,
} from 'react-native';

import s, { variants } from './Button.styles';

type Props = React.PropsWithChildren<TouchableOpacityProps> & {
  type?: 'primary' | 'secondary';
};

export function Button(props: Props) {
  const {
    children,
    type = 'primary',
    style = {},
  } = props;

  const touchableStyle = StyleSheet.flatten([
    s.button,
    variants.touchable[type],
    style,
  ]);

  const textStyle = StyleSheet.flatten([
    s.text,
    variants.text[type],
  ]);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={touchableStyle}
      {...props}
    >
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}
