import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
  Map, Heart, ShoppingCart, User,
} from 'lucide-react-native';

// routes names
export const routes = {
  // bottom tab stacks
  DISCOVER_STACK: {
    id: 'DISCOVER_STACK',
    name: 'Explorar',
    icon: Map,
    params: undefined,
  },
  FAVORITES_STACK: {
    id: 'FAVORITES_STACK',
    name: 'Favoritos',
    params: undefined,
    icon: Heart,
  },
  ORDERS_STACK: {
    id: 'ORDERS_STACK',
    name: 'Pedidos',
    icon: ShoppingCart,
    params: undefined,
  },
  ACCOUNT_STACK: {
    id: 'ACCOUNT_STACK',
    name: 'Conta',
    icon: User,
    params: undefined,
  },
  // screens
  DISCOVER: {
    id: 'DISCOVER',
    name: 'Explorar',
    icon: null,
    params: undefined,
  },
  FAVORITES: {
    id: 'FAVORITES',
    name: 'Favoritos',
    params: undefined,
    icon: null,
  },
  ORDERS: {
    id: 'ORDERS',
    name: 'Pedidos',
    icon: null,
    params: undefined,
  },
  ACCOUNT: {
    id: 'ACCOUNT',
    name: 'Minha Conta',
    icon: null,
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
