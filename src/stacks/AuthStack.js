import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthLoginScreen } from '../screens/auth/AuthLoginScreen.js';
import { AuthRegisterScreen } from '../screens/auth/AuthRegisterScreen.js';

const Stack = createStackNavigator();

export const AuthStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name='AuthLoginScreen'
      component={AuthLoginScreen}
    />
    <Stack.Screen
      name='AuthRegisterScreen'
      component={AuthRegisterScreen}
    />
  </Stack.Navigator>
)