import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from './routes/router.types';

import HomeScreen from '~/screens/home/home.screen';
import LoginScreen from '~/screens/login/login.screen';
import RegisterScreen from './screens/register/register.screen';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function MainRouter() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Group screenOptions={{ headerShown: false }}>
          <RootStack.Screen name="Home" component={HomeScreen} />
          <RootStack.Screen name="Login" component={LoginScreen} />
          <RootStack.Screen name="Register" component={RegisterScreen} />
        </RootStack.Group>
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
