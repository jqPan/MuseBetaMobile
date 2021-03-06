import React, { useEffect, useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import decode from 'jwt-decode';
import {
  Feather,
} from '@expo/vector-icons';

import { Context as AuthContext } from './../providers/AuthProvider.js';
import { Context as ProfileContext } from './../providers/ProfileProvider.js';

import { BottomTabs } from './../layout/BottomTabs.js';

import { WelcomeStack } from './WelcomeStack.js';

import { HeaderActions } from './../components/HeaderActions.js';
import { Logo } from './../components/Logo.js';

import { StoryCardModal } from './../modals/StoryCardModal.js';
import { ScanQRModal } from './../modals/ScanQRModal.js';
import { AccountModal } from '../modals/AccountModal.js'
import { UpdateNameModal } from './../modals/UpdateNameModal.js';
import { UpdateEmailModal } from './../modals/UpdateEmailModal.js';
import { UpdatePasswordModal } from './../modals/UpdatePasswordModal.js';
import { SupportStack } from './SupportStack.js';
import { SettingsStack } from './SettingsStack.js';
import { CreateStack } from './CreateStack.js';
import { CreatePermissionsModal } from './../modals/CreatePermissionsModal.js';
import { ReportStack } from './ReportStack.js';
import { UpdateLinksModal } from '../modals/UpdateLinksModal.js';
import { UpdateBioModal } from './../modals/UpdateBioModal.js';

const Stack = createStackNavigator();

export const RootStack = () => {
  const { state: { token, isNew }, logout } = useContext(AuthContext);
  const { getMe } = useContext(ProfileContext);

  useEffect(() => {
    const expDate = decode(token);
    if (expDate.exp < new Date().getTime() / 1000)
      logout();

    getMe();
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={isNew ? 'WelcomeStack' : 'BottomTabs'}
      screenOptions={{ animationEnabled: false }}
      mode='modal'
    >
      <Stack.Screen
        name='WelcomeStack'
        component={WelcomeStack}
        options={{
          header: () => null
        }}
      />
      <Stack.Screen
        name='BottomTabs'
        component={BottomTabs}
        options={({ navigation }) => ({
          headerLeft: () => <Logo />,
          headerTitle: null,
          headerRight: () => <HeaderActions navigation={navigation} />
        })}
      />
      <Stack.Screen
        name='CreateStack'
        component={CreateStack}
        mode={'card'}
        options={{
          animationEnabled: true,
          cardOverlayEnabled: true,
          header: () => null
        }}
      />
      <Stack.Screen
        name='StoryCardModal'
        component={StoryCardModal}
        options={{
          animationEnabled: true,
          header: () => null,
          cardStyle: { backgroundColor: 'rgba(0, 0, 0, 0.15)' },
          cardOverlayEnabled: true,

          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 0.5, 0.9, 1],
                  outputRange: [0, 0.25, 0.7, 1]
                })
              },
              overlayStyle: {
                opacity: progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 0.5],
                  extrapolate: 'clamp',
                })
              }
            };
          }
        }}
      />
      <Stack.Screen
        name='CreatePermissionsModal'
        component={CreatePermissionsModal}
        options={{
          animationEnabled: true,
          headerStyle: {
            backgroundColor: 'rgb(40,40,40)',
            shadowRadius: 0,
            shadowColor: 'transparent',
            shadowOffset: { height: 0 },
          },
          headerTitle: null,
          headerBackTitleVisible: false,
          headerBackImage:
            () => <Feather
              style={{ marginLeft: 10 }}
              name='x' size={24} color='white'
            />
        }}
      />
      <Stack.Screen
        name='ReportStack'
        component={ReportStack}
        options={({ navigation }) => ({
          animationEnabled: true,
          headerTitle: null
        })}
      />
      <Stack.Screen
        name='ScanQRModal'
        component={ScanQRModal}
        options={{
          animationEnabled: true,
          header: () => null
        }}
      />
      <Stack.Screen
        name='AccountModal'
        component={AccountModal}
        options={{
          animationEnabled: true,
          header: () => null
        }}
      />
      <Stack.Screen
        name='UpdateNameModal'
        component={UpdateNameModal}
        options={{
          animationEnabled: true,
          header: () => null
        }}
      />
      <Stack.Screen
        name='UpdateEmailModal'
        component={UpdateEmailModal}
        options={{
          animationEnabled: true,
          header: () => null
        }}
      />
      <Stack.Screen
        name='UpdateLinksModal'
        component={UpdateLinksModal}
        options={{
          animationEnabled: true,
          header: () => null
        }}
      />
      <Stack.Screen
        name='UpdateBioModal'
        component={UpdateBioModal}
        options={{
          animationEnabled: true,
          header: () => null
        }}
      />
      <Stack.Screen
        name='UpdatePasswordModal'
        component={UpdatePasswordModal}
        options={{
          animationEnabled: true,
          header: () => null
        }}
      />
      <Stack.Screen
        name='SettingsStack'
        component={SettingsStack}
        options={{ animationEnabled: true }}
        mode={'modal'}
      />
      <Stack.Screen
        name='SupportStack'
        component={SupportStack}
        options={{ animationEnabled: true }}
        mode={'modal'}
      />
    </Stack.Navigator>
  );
};