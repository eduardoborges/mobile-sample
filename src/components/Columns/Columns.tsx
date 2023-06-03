import React, { useMemo } from 'react';
import { DimensionValue, StyleSheet, View } from 'react-native';

type ColumnsProps = React.PropsWithChildren<{
  debug?: boolean;
  gapless?: boolean;
  centered?: boolean;
  vcentered?: boolean;
  multiline?: boolean;
  direction?: 'row' | 'column';
}>;

type ColumnProps = React.PropsWithChildren<{
  debug?: boolean;
  size?: number;
  width?: DimensionValue;
  offset?: number;
  narrow?: boolean;
  bg?: string;
  m?: number;
  p?: number;
}>;

export function Columns({ children, ...props }: ColumnsProps) {
  const s = useMemo(() => getColumnsStyles(props), [props]);

  return (
    <View style={s.columns}>
      {children}
    </View>
  );
}

export function Column({ children, ...props }:ColumnProps) {
  const s = useMemo(() => getColumnStyles(props), [props]);

  return (
    <View style={s.column}>
      {children}
    </View>
  );
}

const getColumnsStyles = (p: ColumnsProps) => StyleSheet.create({
  columns: {
    flex: 1,
    flexDirection: p.direction || 'row',
    ...(p.debug && {
      borderWidth: 1,
      borderColor: 'red',
    }),
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

const getColumnStyles = (p: ColumnProps) => StyleSheet.create({
  column: {
    backgroundColor: p.bg,
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
    ...(p.m && {
      margin: p.m,
    }),
    ...(p.p && {
      padding: p.p,
    }),
  },
});
