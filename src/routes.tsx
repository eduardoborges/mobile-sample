import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from 'lucide-react-native';

// routes names
export const routes = {
  HOME: 'Home',
  AUTH: {
    SIGNIN: 'AuthSignin',
    SIGNUP: 'AuthSignup',
  },
} as const;

export type RootStackParamList = {
  [routes.HOME]: undefined;
  [routes.AUTH.SIGNIN]: undefined;
  [routes.AUTH.SIGNUP]: undefined;
};

export const tabBarIcon = ({ focused, color, size }: any) => (
  <Home
    color={color}
    size={size}
  />
);

export const Stack = createNativeStackNavigator<RootStackParamList>();
export const BottomTab = createBottomTabNavigator<RootStackParamList>();

Stack.Navigator.defaultProps = {
  screenOptions: {
    headerShown: false,
  },
};

BottomTab.Navigator.defaultProps = {
  screenOptions: {
    headerShown: false,
    tabBarIcon,
  },
};
