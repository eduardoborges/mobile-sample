import React, { useMemo } from 'react';
import A from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import type { TextStyle } from 'react-native';

export type ParagraphProps = React.ComponentProps<typeof A.Text> & {
  align?: TextStyle['textAlign'];
  color?: TextStyle['color'];
  size?: 's' | 'm' | 'l' | 'xl' | 'xxl';
  weight?: TextStyle['fontWeight'];
};

export function Paragraph({ children, ...props }: ParagraphProps) {
  const s = useMemo(() => getStyles(props), [props]);

  return (
    <A.Text style={s.text} {...props}>
      {children}
    </A.Text>
  );
}

const getStyles = (props: ParagraphProps) => {
  const fontSize = {
    s: 14,
    m: 16,
    l: 18,
    xl: 20,
    xxl: 22,
  };
  return StyleSheet.create({
    text: {
      fontSize: fontSize[props.size || 'm'],
      fontWeight: props.weight || 'normal',
      flexWrap: 'wrap',
      width: 'auto',
      color: props.color,
      textAlign: props.align || 'left',
      marginBottom: 15,
    },
  });
};
