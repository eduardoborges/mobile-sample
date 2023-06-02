import React, { useMemo } from 'react';
import A from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

export interface ParagraphProps extends React.ComponentProps<typeof A.Text> {
  children?: React.ReactNode;
}

export function P({ children, ...props }: ParagraphProps) {
  const s = useMemo(() => styles(props), [props]);

  return (
    <A.Text style={s.title} {...props}>
      {children}
    </A.Text>
  );
}

const styles = (p: ParagraphProps) => StyleSheet.create({
  title: {
    fontSize: 13,
    fontWeight: 'normal',
    color: '#000',
  },
});
