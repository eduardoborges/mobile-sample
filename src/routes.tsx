import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  Map, Heart, ShoppingCart, User,
} from 'lucide-react-native';

// routes names
export const routes = {
  DISCOVER: {
    id: 'DISCOVER',
    name: 'Explorar',
    icon: Map,
    params: undefined,
  },
  FAVORITES: {
    id: 'FAVORITES',
    name: 'Favoritos',
    icon: Heart,
    params: undefined,
  },
  ORDERS: {
    id: 'ORDERS',
    name: 'Pedidos',
    icon: ShoppingCart,
    params: undefined,
  },
  ACCOUNT: {
    id: 'ACCOUNT',
    name: 'Minha Conta',
    icon: User,
    params: undefined,
  },
} as const;

/**
 * Typings
 */

// infer RootStackParamList type from routes
export type RootStackParamList = {
  [key in keyof typeof routes]: typeof routes[key]['params'];
};

export type RootStackProps<T extends keyof RootStackParamList> = {
  navigation: NativeStackScreenProps<RootStackParamList, T>['navigation'];
  route: NativeStackScreenProps<RootStackParamList, T>['route'];
};

export type ScreenProps<
  T extends keyof RootStackParamList,
> = NativeStackScreenProps<RootStackParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const DiscoverStack = createNativeStackNavigator<RootStackParamList>();
export const RootBottomTab = createBottomTabNavigator<RootStackParamList>();

RootBottomTab.Navigator.defaultProps = {
  screenOptions: {
    headerShown: false,
  },
};
