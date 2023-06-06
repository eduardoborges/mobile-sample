import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import A, {
  Extrapolate, interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle, useSharedValue,
} from 'react-native-reanimated';
import { BlurView } from '@react-native-community/blur';
import { useNavigation } from '@react-navigation/native';
import { Bluetooth } from 'lucide-react-native';
import { getNotchHeight, hasNotch } from '~/utils/device';
import { blurType } from '~/theme';

type ContainerProps = React.PropsWithChildren<{
  title?: string;
  gapless?: boolean;
}>;

export function Container({ children, ...props }: ContainerProps) {
  const navigation = useNavigation();
  const { title } = props;

  const s = useMemo(() => styles(props), [props]);

  const scroll = useSharedValue(0);

  const TRANSITION_RATIO = 100;
  const MIN_FONT_SIZE = 18;
  const MAX_FONT_SIZE = 32;

  const onScroll = useAnimatedScrollHandler({
    onScroll: (e) => {
      scroll.value = e.contentOffset.y;
    },
  });

  const titleStyles = useAnimatedStyle(() => ({
    fontSize: interpolate(
      scroll.value,
      [0, TRANSITION_RATIO],
      [MAX_FONT_SIZE, MIN_FONT_SIZE],
      Extrapolate.CLAMP,
    ),
  }));

  const borderStyles = useAnimatedStyle(() => ({
    opacity: interpolate(
      scroll.value,
      [0, TRANSITION_RATIO],
      [0, 1],
      Extrapolate.CLAMP,
    ),
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
          <View style={{ height: s.scrollGap.height * 0.8 }} />
        </A.ScrollView>
      </A.View>

      {/* For blur works must be in the end, i dont know why */}
      <BlurView blurType={blurType} style={s.headerContainer}>
        <View style={s.headerGap} />
        {title && (
          <View style={s.titleContainer}>
            <A.Text style={[s.title, titleStyles]}>
              {navigation.canGoBack() ? '👈 ' : ''}
              {title}
            </A.Text>
          </View>
        )}
        <A.View style={[s.borderBottom, borderStyles]} />
      </BlurView>
    </>
  );
}

const styles = (p: ContainerProps) => {
  const NOTCH_SIZE = getNotchHeight();

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
      backgroundColor: '#fff',
    },
    scroll: {
      flex: 1,
      width: '100%',
      paddingHorizontal: 20,
    },
    scrollGap: {
      height: NOTCH_SIZE + 50,
      zIndex: 10,
    },
    headerContainer: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '100%',
      position: 'absolute',
      top: 0,
      zIndex: 3,
      // borderBottomColor: '#000',
      borderBottomWidth: 1,
    },
    titleContainer: {
      // backgroundColor: 'red',
      flex: 1,
      width: '100%',
      paddingHorizontal: 20,
      paddingVertical: 15,
    },
    borderBottom: {
      width: '100%',
      height: 0.5,
      backgroundColor: '#ddd',
      position: 'absolute',
      bottom: 0,
      left: 0,
    },
    headerGap: {
      height: hasNotch() ? NOTCH_SIZE - 15 : 0,
      display: p.gapless ? 'none' : 'flex',
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'black',
    },
  });
};
