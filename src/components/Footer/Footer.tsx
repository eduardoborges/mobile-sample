/* eslint-disable no-nested-ternary */
import React from 'react';
import { StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import { hasNotch } from '~/utils/device';

type Props = React.PropsWithChildren<{

}>;

export function Container(props: Props) {
  const { children } = props;

  return (
    <BlurView blurType="light" blurAmount={10} style={s.footer}>
      {children}
    </BlurView>
  );
}

const s = StyleSheet.create({
  footer: {
    flex: 1,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 15,
    paddingBottom: 30,
    zIndex: 3,
  },
});
