import React, { useMemo } from 'react';

import {
  TouchableOpacity, TouchableOpacityProps, StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedback,
} from 'react-native';
import theme, { INPUT_BUTTON_HEIGHT } from '~/theme';

export type ButtonProps = React.PropsWithChildren<TouchableOpacityProps> & {
  variation?: 'primary' | 'secondary' | 'link' | 'outline';
};

export function Button({ children, ...props }: ButtonProps) {
  const s = useMemo(() => styles(props), [props]);

  return (
    <TouchableOpacity activeOpacity={0.9} style={s.container} {...props}>
      <Text style={s.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = (p: ButtonProps) => StyleSheet.create({
  container: {
    borderRadius: 6,
    height: INPUT_BUTTON_HEIGHT,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    ...(p.variation === 'primary' || p.variation === undefined) && { // default
      backgroundColor: theme.colors.primary,
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
      color: theme.colors.white,
    },

    ...(p.variation === 'secondary') && {
      color: theme.colors.white,
    },
    fontSize: 16,
    fontWeight: 'bold',
  },
});
