import React, { useMemo } from 'react';

import {
  TouchableOpacity, TouchableOpacityProps, StyleSheet, Text,
} from 'react-native';

export type ButtonProps = React.PropsWithChildren<TouchableOpacityProps> & {
  type?: 'primary' | 'secondary';
};

export function Button({ children, ...props }: ButtonProps) {
  const s = useMemo(() => styles(props), [props]);

  return (
    <TouchableOpacity activeOpacity={0.8} style={s.container} {...props}>
      <Text style={s.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = (p: ButtonProps) => StyleSheet.create({
  container: {
    borderRadius: 6,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    ...(p.type === 'primary') && {
      backgroundColor: '#000',
      color: '#fff',
    },
    ...(p.type === 'secondary') && {
      backgroundColor: '#fff',
      borderColor: '#000',
      borderWidth: 1,
      color: '#000',
    },
  },
  text: {
    ...(p.type === 'primary') && {
      color: '#fff',
    },

    ...(p.type === 'secondary') && {
      color: '#000',
    },
    color: 'inherit',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
