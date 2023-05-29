import React from 'react';
import { BlurView } from '@react-native-community/blur';
import { Text, TouchableOpacity } from 'react-native';
import { Route } from '@react-navigation/native';

export function BottomNavBar({ state, descriptors, navigation }: any) {
  return (
    <BlurView style={{ flexDirection: 'row' }}>
      {state.routes.map((route: Route<'home'>, index: number) => {
        const { options } = descriptors[route.key];

        const getLabel = () => {
          if (options.tabBarLabel !== undefined) {
            return options.tabBarLabel;
          }
          if (options.title !== undefined) {
            return options.title;
          }
          return route.name;
        };
        const label = getLabel();

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that
            // the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </BlurView>
  );
}
