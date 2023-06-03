import React from 'react';
import { BlurView } from '@react-native-community/blur';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { routes } from './routes';

export default function BottomTabBar({ navigation, state, descriptors }: BottomTabBarProps) {
  const s = getStyles();
  return (
    <BlurView style={s.container} blurType="light">
      <View style={s.line} />
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const { name, icon, id } = routes[route.name as keyof typeof routes];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            // @ts-ignore
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const Icon = icon;

        return (
          <TouchableOpacity
            key={id}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={s.item}
          >
            <Icon size={24} color={s.icon.color} {...(isFocused && { fill: s.icon.color })} />

            <Text style={[s.text, isFocused && s.textActive]}>
              {name}
            </Text>

          </TouchableOpacity>
        );
      })}
    </BlurView>
  );
}

const getStyles = () => StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 15,
    paddingHorizontal: 10,
    borderTopWidth: 2,
    borderTopColor: '#000',
  },
  line: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 0.5,
    backgroundColor: '#e0e0e0',
  },
  item: {
    flex: 1,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    color: '#000',
  },
  text: {
    marginTop: 5,
    textTransform: 'capitalize',
    color: '#000',
    opacity: 0.8,
    fontSize: 12,
  },
  textActive: {
    opacity: 1,
  },
});
