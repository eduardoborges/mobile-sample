import React, { useMemo } from 'react';
import A from 'react-native-reanimated';
import { StyleSheet, Text } from 'react-native';

export interface TitleProps extends React.ComponentProps<typeof A.Text> {
  children?: React.ReactNode;
}

export function H1({ children, ...props }: TitleProps) {
  const s = useMemo(() => styles(props), [props]);

  return (
    <A.Text style={s.title} {...props}>
      {children}
    </A.Text>
  );
}

const styles = (p: TitleProps) => StyleSheet.create({
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
});
