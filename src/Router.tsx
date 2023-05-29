import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Button, Platform, Text } from 'react-native';
import home from '~/screens/home/home';
import signin from './screens/signin/signin';
import signup from './screens/signup/signup';
import Loader from './screens/loader/loader.page';
import { BottomTab, Stack, routes } from './routes';
import { useAuth } from '~/store';

export default function Routes() {
  const { isLoading, data } = useAuth();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NavigationContainer>
      {!data ? (
        <Stack.Navigator initialRouteName={routes.AUTH.SIGNIN}>
          <Stack.Group>
            <Stack.Screen name={routes.AUTH.SIGNIN} component={signin} />
            {/* <Stack.Screen name={routes.AUTH.SIGNUP} component={signup} /> */}
          </Stack.Group>
        </Stack.Navigator>
      ) : (
        <BottomTab.Navigator>
          <BottomTab.Group>
            <BottomTab.Screen name={routes.HOME} component={home} />
          </BottomTab.Group>
        </BottomTab.Navigator>
      )}
    </NavigationContainer>
  );
}
