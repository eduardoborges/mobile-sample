import React, { useMemo } from 'react';
import {
  StyleSheet, View, Dimensions,
} from 'react-native';
import A, {
  Extrapolate, interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle, useSharedValue,
} from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';
import { hasNotch } from '~/utils/device';

type ContainerProps = React.PropsWithChildren<{
  title?: string;
  gapless?: boolean;
}>;

export function Container({ children, ...props }: ContainerProps) {
  const { title } = props;

  const s = useMemo(() => styles(props), [props]);

  const scroll = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      scroll.value = e.contentOffset.y;
    },
  });

  const deviceWidth = Dimensions.get('window').width;
  const TRANSITION_RATIO = 100;
  const MIN_FONT_SIZE = 16;
  const MAX_FONT_SIZE = 32;

  const titleStyles = useAnimatedStyle(() => ({
    fontSize: interpolate(
      scroll.value,
      [0, TRANSITION_RATIO],
      [MAX_FONT_SIZE, MIN_FONT_SIZE],
      Extrapolate.CLAMP,
    ),
    transform: [
      {
        translateX: interpolate(
          scroll.value,
          [0, TRANSITION_RATIO],
          [0, deviceWidth / 2.5],
          Extrapolate.CLAMP,
        ),
      },
    ],
  }));

  return (
    <>
      <A.View style={s.container}>
        <A.ScrollView
          onScroll={onScroll}
          scrollEventThrottle={10}
          style={s.scroll}
        >
          <View style={s.scrollGap} />
          {children}
        </A.ScrollView>
      </A.View>

      {/* For blur works must be in the end, i dont know why */}
      <BlurView blurType="light" style={s.headerContainer}>
        <View style={s.headerGap} />
        {title && (
          <View style={s.titleContainer}>
            <A.Text style={[s.title, titleStyles]}>
              {title}
            </A.Text>
          </View>
        )}
      </BlurView>
    </>
  );
}

const styles = (p: ContainerProps) => {
  const NOTCH_SIZE = hasNotch() ? 50 : 15;

  const calcScrollGapHeight = () => {
    if (p.title) return NOTCH_SIZE + 70;
    if (!p?.title) return NOTCH_SIZE;
    if (p?.gapless) return 0;
    return NOTCH_SIZE;
  };

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '100%',
      zIndex: 1,
    },
    scroll: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 20,
    },
    scrollGap: {
      height: calcScrollGapHeight(),
    },
    headerContainer: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '100%',
      position: 'absolute',
      top: 0,
      zIndex: 3,
    },
    titleContainer: {
      // backgroundColor: 'red',
      flex: 1,
      width: '100%',
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    headerGap: {
      height: hasNotch() ? 50 : 15,
      display: p.gapless ? 'none' : 'flex',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'black',
    },
  });
};
