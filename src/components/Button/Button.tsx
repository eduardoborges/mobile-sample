import React, { useMemo } from 'react';

import {
  TouchableOpacity, TouchableOpacityProps, StyleSheet, Text,
} from 'react-native';

export type ButtonProps = React.PropsWithChildren<TouchableOpacityProps> & {
  variation?: 'primary' | 'secondary';
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
    paddingHorizontal: 20,
    ...(p.variation === 'primary' || p.variation === undefined) && { // default
      backgroundColor: '#000',
      color: '#fff',
    },
    ...(p.variation === 'secondary') && {
      backgroundColor: '#fff',
      borderColor: '#000',
      borderWidth: 1,
      color: '#000',
    },
  },
  text: {
    ...(p.variation === 'primary' || p.variation === undefined) && { // default
      color: '#fff',
    },

    ...(p.variation === 'secondary') && {
      color: '#000',
    },
    fontSize: 16,
    fontWeight: 'bold',
  },
});
