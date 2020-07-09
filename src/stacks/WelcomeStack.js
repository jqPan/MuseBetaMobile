import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { WelcomeIntroScreen } from './../screens/welcome/WelcomeIntroScreen.js';
import { WelcomeTermsScreen } from './../screens/welcome/WelcomeTermsScreen.js';
import { WelcomeImageScreen } from './../screens/welcome/WelcomeImageScreen.js';
import { WelcomePermissionScreen } from './../screens/welcome/WelcomePermissionScreen.js';
import { WelcomeLocationScreen } from './../screens/welcome/WelcomeLocationScreen.js';

const Stack = createStackNavigator();

export const WelcomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen
      name='WelcomeIntroScreen'
      component={WelcomeIntroScreen}
    />
    <Stack.Screen
      name='WelcomeTermsScreen'
      component={WelcomeTermsScreen}
    />
    <Stack.Screen
      name='WelcomePermissionScreen'
      component={WelcomePermissionScreen}
    />
    <Stack.Screen
      name='WelcomeLocationSceen'
      component={WelcomeLocationScreen}
    />
    <Stack.Screen
      name='WelcomeImageScreen'
      component={WelcomeImageScreen}
    />
  </Stack.Navigator>
);