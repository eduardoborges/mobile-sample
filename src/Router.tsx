/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import Loader from './screens/loader/loader.page';
import { RootBottomTab, DiscoverStack, routes } from './routes';
import { useAuth } from '~/store';
import BottomTabBar from './BottomTabBar';

// screens
import DiscoverScreen from './screens/discover/DiscoverScreen';
import FavoritesScreen from './screens/favorites/FavoritesScreen';
import OrdersScreen from './screens/orders/OrdersScreen';
import AccountScreen from './screens/account/AccountScreen';

export default function RootRoutes() {
  const { isLoading, data } = useAuth();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      <RootBottomTab.Navigator tabBar={BottomTabBar}>
        <RootBottomTab.Group>
          <RootBottomTab.Screen name={routes.DISCOVER_STACK.id} component={DiscoverRouterStack} />
          <RootBottomTab.Screen name={routes.FAVORITES_STACK.id} component={FavoritesRouterStack} />
          <RootBottomTab.Screen name={routes.ORDERS_STACK.id} component={OrdersRouterStack} />
          <RootBottomTab.Screen name={routes.ACCOUNT_STACK.id} component={AccountRouterStack} />
        </RootBottomTab.Group>
      </RootBottomTab.Navigator>
    </NavigationContainer>
  );
}

function DiscoverRouterStack() {
  const screenOptions : NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <DiscoverStack.Navigator screenOptions={screenOptions}>
      <DiscoverStack.Screen name={routes.DISCOVER.id} component={DiscoverScreen} />
    </DiscoverStack.Navigator>
  );
}

function FavoritesRouterStack() {
  const screenOptions : NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <DiscoverStack.Navigator screenOptions={screenOptions}>
      <DiscoverStack.Screen name={routes.FAVORITES.id} component={FavoritesScreen} />
    </DiscoverStack.Navigator>
  );
}

function OrdersRouterStack() {
  const screenOptions : NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <DiscoverStack.Navigator screenOptions={screenOptions}>
      <DiscoverStack.Screen name={routes.ORDERS.id} component={OrdersScreen} />
    </DiscoverStack.Navigator>
  );
}

function AccountRouterStack() {
  const screenOptions : NativeStackNavigationOptions = {
    headerShown: false,
  };
  return (
    <DiscoverStack.Navigator screenOptions={screenOptions}>
      <DiscoverStack.Screen name={routes.ACCOUNT.id} component={AccountScreen} />
    </DiscoverStack.Navigator>
  );
}
