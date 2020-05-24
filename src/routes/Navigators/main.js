import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import BottomNavigator from './bottomTab';

import SignIn from '~/pages/SignIn';
import { useAuth } from '~/contexts/auth';

const StackNav = createStackNavigator();

const StackNavigator = () => {
  const { signed } = useAuth();

  return (
    <StackNav.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {signed ? (
        <StackNav.Screen name="BottomNav" component={BottomNavigator} />
      ) : (
        <StackNav.Screen name="SignIn" component={SignIn} />
      )}
    </StackNav.Navigator>
  );
};

export default StackNavigator;
