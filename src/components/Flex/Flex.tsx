import React, { useMemo } from 'react';
import {
  DimensionValue, ScrollView, StyleSheet, View, ViewProps,
} from 'react-native';

export type FlexProps = React.PropsWithChildren<{
  bg?: string;
  centered?: boolean;
  debug?: boolean;
  debugBg?: boolean;
  debugColor?: string;
  end?: boolean;
  full?: boolean;
  gap?: number;
  gapless?: boolean;
  horizontal?: boolean;
  // margins
  m?: Array<number> | number;
  marginless?: boolean;
  mb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  multiline?: boolean;
  narrow?: boolean;
  offset?: number;
  // paddings
  p?: Array<number> | number;
  paddingless?: boolean;
  pb?: number;
  phone?: Omit<FlexProps, 'phone'>;
  pl?: number;
  pr?: number;
  pt?: number;
  //
  scroll?: boolean;
  size?: number;
  spaceAround?: boolean;
  spaceBetween?: boolean;
  start?: boolean;
  // style
  style?: ViewProps['style'];
  // responsivity
  tablet?: Omit<FlexProps, 'tablet'>;
  vCentered?: boolean;
  vEnd?: boolean;
  vStart?: boolean;
  vertical?: boolean;
  width?: DimensionValue;
}> & ViewProps;

export function Flex(props: FlexProps) {
  const { children, scroll, style } = props;
  const Component = scroll ? ScrollView : View;

  const s = useMemo(() => getStyles(props), [props]);

  return (
    <Component {...props} style={[s.flex, style]}>
      {children}
    </Component>
  );
}

const getStyles = (p: FlexProps) => {
  const getDirection = () : 'vertical' | 'horizontal' => {
    if (p.vertical) return 'vertical';
    if (p.horizontal) return 'horizontal';
    return 'horizontal';
  };

  const DIRECTION = getDirection();

  return StyleSheet.create({
    flex: {
      // defaults
      backgroundColor: p.bg,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',

      // for debugging
      ...(p.debug && {
        borderColor: p.debugColor || 'blue',
        borderWidth: 1,
      }),
      ...(p.debugBg && {
        backgroundColor: p.debugColor || 'blue',
      }),
      // overrides
      ...(p.full && {
        width: '100%',
      }),
      ...(p.size && {
        flex: p.size,
      }),
      ...(p.width && {
        flex: 0,
        width: p.width,
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
        marginHorizontal: p.m[1],
        marginVertical: p.m[0],
      }),
      ...(p.m && Array.isArray(p.m) && p.m.length === 3 && {
        marginBottom: p.m[2],
        marginHorizontal: p.m[1],
        marginTop: p.m[0],
      }),
      ...(p.m && Array.isArray(p.m) && p.m.length === 4 && {
        marginBottom: p.m[2],
        marginLeft: p.m[3],
        marginRight: p.m[1],
        marginTop: p.m[0],
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
      ...(p.p && Array.isArray(p.p) && p.p.length === 2 && {
        paddingHorizontal: p.p[1],
        paddingVertical: p.p[0],
      }),
      ...(p.p && Array.isArray(p.p) && p.p.length === 3 && {
        paddingBottom: p.p[2],
        paddingHorizontal: p.p[1],
        paddingTop: p.p[0],
      }),
      ...(p.p && Array.isArray(p.p) && p.p.length === 4 && {
        paddingBottom: p.p[2],
        paddingLeft: p.p[3],
        paddingRight: p.p[1],
        paddingTop: p.p[0],
      }),
      ...(p.pt && {
        paddingTop: p.pt,
      }),
      ...(p.pr && {
        paddingRight: p.pr,
      }),
      ...(p.pb && {
        paddingBottom: p.pb,
      }),
      ...(p.pl && {
        paddingLeft: p.pl,
      }),

      // flexbox
      ...(p.vertical && {
        flexDirection: 'column',
      }),
      ...(p.horizontal && {
        flexDirection: 'row',
      }),
      ...(p.gap && {
        gap: p.gap,
      }),
      ...(p.gapless && {
        gap: 0,
      }),

      /**
     * Alignment
     */

      // centering
      ...(p.centered && DIRECTION === 'horizontal' && {
        justifyContent: 'center',
      }),
      ...(p.centered && DIRECTION === 'vertical' && {
        alignItems: 'center',
      }),
      ...(p.vCentered && DIRECTION === 'horizontal' && {
        alignItems: 'center',
      }),
      ...(p.vCentered && DIRECTION === 'vertical' && {
        justifyContent: 'center',
      }),
      // start/end
      ...(p.start && DIRECTION === 'horizontal' && {
        justifyContent: 'flex-start',
      }),
      ...(p.start && DIRECTION === 'vertical' && {
        alignItems: 'flex-start',
      }),
      ...(p.end && DIRECTION === 'horizontal' && {
        justifyContent: 'flex-end',
      }),
      ...(p.end && DIRECTION === 'vertical' && {
        alignItems: 'flex-end',
      }),
      ...(p.vEnd && DIRECTION === 'horizontal' && {
        alignItems: 'flex-end',
      }),
      ...(p.vEnd && DIRECTION === 'vertical' && {
        justifyContent: 'flex-end',
      }),
      ...(p.vStart && DIRECTION === 'horizontal' && {
        alignItems: 'flex-start',
      }),
      ...(p.vStart && DIRECTION === 'vertical' && {
        justifyContent: 'flex-start',
      }),

      ...(p.multiline && {
        flexWrap: 'wrap',
      }),
      ...(p.spaceBetween && {
        justifyContent: 'space-between',
      }),
      ...(p.spaceAround && {
        justifyContent: 'space-around',
      }),
    },
  });
};
