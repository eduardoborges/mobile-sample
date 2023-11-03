import React, { useMemo } from 'react';
import A from 'react-native-reanimated';
import { StyleSheet } from 'react-native';
import theme from '~/theme';

export type TitleProps = React.PropsWithChildren<{
  size?: keyof typeof theme.headings;
  color?: string;
}>;

export function Heading({ children, ...props }: TitleProps) {
  const s = useMemo(() => getStyles(props), [props]);

  return (
    <A.Text style={s.title} {...props}>
      {children}
    </A.Text>
  );
}

const getStyles = (props: TitleProps) => {
  const { size = 1 } = props;

  return StyleSheet.create({
    title: {
      fontFamily: theme.fonts.primary,
      fontSize: theme.headings[size],
      fontWeight: '700',
      color: props.color || '#333',
    },
  });
};
