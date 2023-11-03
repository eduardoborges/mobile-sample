import React, { useMemo } from 'react';
import { DimensionValue, StyleSheet, View } from 'react-native';

type FlexProps = React.PropsWithChildren<{
  debug?: boolean;
  size?: number;
  gapless?: boolean;
  centered?: boolean;
  vcentered?: boolean;
  multiline?: boolean;
  direction?: 'horizontal' | 'vertical';
  width?: DimensionValue;
  offset?: number;
  narrow?: boolean;
  bg?: string;
  m?: number | Array<number>;
  p?: number | Array<number>;
  mt?: number;
}>;

export function Flex({ children, ...props }: FlexProps) {
  const s = useMemo(() => getStyles(props), [props]);

  return (
    <View style={s.flex}>
      {children}
    </View>
  );
}

const getStyles = (p: FlexProps) => StyleSheet.create({
  flex: {
    backgroundColor: p.bg,
    flex: 1,
    ...(p.debug && {
      borderWidth: 1,
      borderColor: 'red',
    }),
    ...(p.size && {
      flex: p.size,
    }),
    ...(p.width && {
      width: p.width,
      flex: 0,
    }),
    ...(p.offset && {
      marginLeft: p.offset,
    }),
    ...(p.narrow && {
      flex: 0,
    }),
    ...(p.m && typeof p.m === 'number' && {
      margin: p.m,
    }),
    ...(p.m && Array.isArray(p.m) && p.m.length === 2 && {
      marginVertical: p.m[0],
      marginHorizontal: p.m[1],
    }),
    ...(p.m && Array.isArray(p.m) && p.m.length === 4 && {
      marginTop: p.m[0],
      marginRight: p.m[1],
      marginBottom: p.m[2],
      marginLeft: p.m[3],
    }),

    ...(p.p && typeof p.p === 'number' && {
      padding: p.p,
    }),
    ...(p.p && Array.isArray(p.p) && p.p.length === 2 && {
      paddingVertical: p.p[0],
      paddingHorizontal: p.p[1],
    }),
    ...(p.p && Array.isArray(p.p) && p.p.length === 4 && {
      paddingTop: p.p[0],
      paddingRight: p.p[1],
      paddingBottom: p.p[2],
      paddingLeft: p.p[3],
    }),
    flexDirection: p.direction === 'vertical' ? 'column' : 'row',
    ...(p.gapless && {
      gap: 0,
    }),
    ...(p.centered && {
      justifyContent: 'center',
    }),
    ...(p.vcentered && {
      alignItems: 'center',
    }),
    ...(p.multiline && {
      flexWrap: 'wrap',
    }),
  },
});
