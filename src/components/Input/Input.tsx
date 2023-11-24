import React, { useMemo } from 'react';

import {
  StyleSheet, TextInputProps, TextInput,
} from 'react-native';
import theme, { INPUT_BUTTON_HEIGHT } from '~/theme';

export type InputProps = React.PropsWithChildren<TextInputProps> & {
  type?: 'primary' | 'secondary';
};

export function Input({ children, style, ...props }: InputProps) {
  const s = useMemo(() => styles(props), [props]);

  return (
    <TextInput style={[s.input, style]} {...props} placeholderTextColor={theme.colors.gray11} focusable />
  );
}

const styles = (p: InputProps) => StyleSheet.create({
  input: {
    borderRadius: 6,
    height: INPUT_BUTTON_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: theme.colors.gray11,
    color: theme.colors.gray7,
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
