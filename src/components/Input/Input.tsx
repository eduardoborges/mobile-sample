import React, { useMemo } from 'react';

import {
  StyleSheet, TextInputProps, TextInput,
} from 'react-native';
import theme from '~/theme';

export type InputProps = React.PropsWithChildren<TextInputProps> & {
  type?: 'primary' | 'secondary';
};

export function Input({ children, ...props }: InputProps) {
  const s = useMemo(() => styles(props), [props]);

  return (
    <TextInput style={s.input} {...props} placeholderTextColor={theme.colors.gray} focusable />
  );
}

const styles = (p: InputProps) => StyleSheet.create({
  input: {
    borderRadius: 6,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.grayDark,
    color: theme.colors.grayDark,
    borderWidth: 1.5,
    width: '100%',
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
    ...(p.type === 'primary' || p.type === undefined) && { // default
      //
    },
    ...(p.type === 'secondary') && {
      //
    },
  },
});
