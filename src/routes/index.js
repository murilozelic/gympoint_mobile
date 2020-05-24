import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useAuth } from '~/contexts/auth';

import StackNavigator from './Navigators/main';

const Routes = () => {
  const { loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="666" />
      </View>
    );
  }

  return <StackNavigator />;
};

export default Routes;
