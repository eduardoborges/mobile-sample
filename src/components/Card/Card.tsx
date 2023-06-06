import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';

export type CardProps = React.PropsWithChildren<{
  debug?: boolean;
}>;

export function Card({ children, ...props }: CardProps) {
  const s = useMemo(() => getStyles(props), [props]);

  return (
    <View style={s.container}>
      {children}
    </View>
  );
}

const getStyles = (p: CardProps) => StyleSheet.create({
  container: {
    backgroundColor: '#fefefe',
    borderRadius: 10,
    borderColor: '#F2f2f2',
    width: '100%',
    minHeight: 50,
    borderWidth: 1,
    ...p.debug && {
      //
    },
  },
});
