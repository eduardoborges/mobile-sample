import React, { useMemo } from 'react';
import A from 'react-native-reanimated';
import { StyleSheet, Text } from 'react-native';
import { theme } from '~/theme';

export type TitleProps = React.PropsWithChildren<{
  size?: keyof typeof theme.headings;
  color?: string;
}>;

export function Heading({ children, ...props }: TitleProps) {
  const s = useMemo(() => styles(props), [props]);

  return (
    <A.Text style={s.title} {...props}>
      {children}
    </A.Text>
  );
}

const styles = (p: TitleProps) => {
  const { size = 1 } = p;

  return StyleSheet.create({
    title: {
      fontFamily: theme.fonts.primary,
      fontSize: theme.headings[size],
      fontWeight: '700',
      color: p.color || '#333',
    },
  });
};
