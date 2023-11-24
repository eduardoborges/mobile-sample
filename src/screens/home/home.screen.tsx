/* eslint-disable global-require */
import { BlurView } from '@react-native-community/blur';
import React from 'react';
import { StyleSheet } from 'react-native';
import Reanimated, {
  Extrapolate, interpolate,
  useAnimatedProps,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  Flex, Heading, Paragraph, useToast,
} from '~/components';
import { HomeScreenProps } from '~/routes/router.types';
import { useHello } from '~/store';
import { SCREEN_WIDTH } from '~/theme';
import { range } from '~/utils';

const AnimatedBlurView = Reanimated.createAnimatedComponent(BlurView);
const MIN_HEADER_HEIGHT = 100;
const MAX_HEADER_HEIGHT = 300;
const INPUT_RANGE = [0, MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT];

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const {
    data: hello,
    isLoading: isLoadingHello,
  } = useHello();

  const toast = useToast();

  const insets = useSafeAreaInsets();

  const isScrolling = useSharedValue(false);
  const translationY = useSharedValue(0);
  const textWidth = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      translationY.value = event.contentOffset.y;
    },
    onBeginDrag: (e) => {
      isScrolling.value = true;
    },
    onEndDrag: (e) => {
      isScrolling.value = false;
    },
  });

  const headerStyle = useAnimatedStyle(() => ({
    height: interpolate(
      translationY.value,
      INPUT_RANGE,
      [MAX_HEADER_HEIGHT, 50 + insets.top],
      Extrapolate.CLAMP,
    ),
  }));

  const imageStyle = useAnimatedStyle(() => ({
    transform: [{
      scale: interpolate(
        translationY.value,
        INPUT_RANGE,
        [1.2, 1],
        Extrapolate.CLAMP,
      ),
    }],
  }));

  const textStyle = useAnimatedStyle(() => ({
    fontSize: interpolate(
      translationY.value,
      INPUT_RANGE,
      [30, 15],
      Extrapolate.CLAMP,
    ),
    transform: [{
      translateX: interpolate(
        translationY.value,
        INPUT_RANGE,
        [0, SCREEN_WIDTH / 2 - textWidth.value / 2 - 20],
        Extrapolate.CLAMP,
      ),
    }],
  }));

  const blurViewProps = useAnimatedProps(() => ({
    blurAmount: interpolate(
      translationY.value,
      INPUT_RANGE,
      [5, 25],
      Extrapolate.CLAMP,
    ),
  }));

  return (
    <Flex>
      <Reanimated.View style={[styles.header, headerStyle]}>
        <AnimatedBlurView
          style={[styles.blur, headerStyle]}
          animatedProps={blurViewProps}
          blurType="dark"
        />
        <Reanimated.Image
          style={[styles.image, imageStyle]}
          resizeMode="cover"
          resizeMethod="scale"
          source={require('./am.jpg')}
        />
        <Reanimated.Text
          onLayout={(e) => {
            textWidth.value = e.nativeEvent.layout.width;
          }}
          style={[
            styles.title,
            textStyle,
          ]}
        >
          Arctic Monkeys
        </Reanimated.Text>
      </Reanimated.View>
      <Reanimated.ScrollView
        scrollEventThrottle={8} // 120fps
        style={[styles.scroll]}
        onScroll={onScroll}
      >
        <Flex vertical p={10}>
          <Heading>Olá mundo</Heading>

          {range(0, 10).map((i) => (
            <Paragraph key={i}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Eos blanditiis obcaecati quae exercitationem ullam praesentium cum commodi fugiat magni, harum,
              veritatis alias ipsum corrupti laborum numquam placeat maiores?
              Voluptatibus, fuga?
            </Paragraph>
          ))}
        </Flex>
        <Flex style={{ height: MAX_HEADER_HEIGHT }} />
      </Reanimated.ScrollView>
    </Flex>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingTop: MAX_HEADER_HEIGHT,
  },
  header: {
    height: MIN_HEADER_HEIGHT,
    width: SCREEN_WIDTH,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    overflow: 'hidden',
  },
  blur: {
    backgroundColor: 'rgba(255,255,255,0.5)',
    height: MIN_HEADER_HEIGHT,
    width: SCREEN_WIDTH,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
  },
  image: {
    width: SCREEN_WIDTH,
    height: MAX_HEADER_HEIGHT,
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: 20,
    left: 20,
    zIndex: 4,
  },
});
