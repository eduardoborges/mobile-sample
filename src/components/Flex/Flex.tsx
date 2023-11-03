import React, { useMemo } from 'react';
import {
  DimensionValue, StyleSheet, View, ViewProps,
} from 'react-native';

type FlexProps = React.PropsWithChildren<{
  debug?: boolean;
  size?: number;
  full?: boolean;
  gapless?: boolean;
  centered?: boolean;
  end?: boolean;
  start?: boolean;
  vCentered?: boolean;
  multiline?: boolean;
  vEnd?: boolean;
  vStart?: boolean;
  vertical?: boolean;
  horizontal?: boolean;
  width?: DimensionValue;
  offset?: number;
  narrow?: boolean;
  bg?: string;
  /**
   * Description: margin
   * @example m={10} // margin: 10
   */
  p?: number | Array<number>;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
  m?: number | Array<number>;
  mt?: number;
  mr?: number;
  mb?: number;
  ml?: number;
  style?: ViewProps['style'];
}>;

/**
 *
 * @param props {FlexProps}
 * @returns
 */
export function Flex(props: FlexProps) {
  const { children } = props;
  const s = useMemo(() => getStyles(props), [props]);

  return (
    <View style={s.flex}>
      {children}
    </View>
  );
}

const getStyles = (p: FlexProps) => StyleSheet.create({
  flex: {
    // defaults
    backgroundColor: p.bg,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'nowrap',

    // for debugging
    ...(p.debug && {
      borderWidth: 1,
      borderColor: 'red',
    }),
    // overrides
    ...(p.full && {
      width: '100%',
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
    // margins
    ...(p.m && typeof p.m === 'number' && {
      margin: p.m,
    }),
    ...(p.m && Array.isArray(p.m) && p.m.length === 2 && {
      marginVertical: p.m[0],
      marginHorizontal: p.m[1],
    }),
    ...(p.m && Array.isArray(p.m) && p.m.length === 3 && {
      marginTop: p.m[0],
      marginHorizontal: p.m[1],
      marginBottom: p.m[2],
    }),
    ...(p.m && Array.isArray(p.m) && p.m.length === 4 && {
      marginTop: p.m[0],
      marginRight: p.m[1],
      marginBottom: p.m[2],
      marginLeft: p.m[3],
    }),
    ...(p.mt && {
      marginTop: p.mt,
    }),
    ...(p.mr && {
      marginRight: p.mr,
    }),
    ...(p.mb && {
      marginBottom: p.mb,
    }),
    ...(p.ml && {
      marginLeft: p.ml,
    }),

    // paddings
    ...(p.p && typeof p.p === 'number' && {
      padding: p.p,
    }),
    // flexbox
    ...(p.vertical && {
      flexDirection: 'column',
    }),
    ...(p.horizontal && {
      flexDirection: 'row',
    }),
    ...(p.gapless && {
      gap: 0,
    }),
    ...(p.centered && {
      justifyContent: 'center',
    }),
    ...(p.end && {
      justifyContent: 'flex-end',
    }),
    ...(p.start && {
      justifyContent: 'flex-start',
    }),
    ...(p.vCentered && {
      alignItems: 'center',
    }),
    ...(p.vEnd && {
      alignItems: 'flex-end',
    }),
    ...(p.vStart && {
      alignItems: 'flex-start',
    }),
    ...(p.multiline && {
      flexWrap: 'wrap',
    }),
    ...p.style as object,
  },
});
