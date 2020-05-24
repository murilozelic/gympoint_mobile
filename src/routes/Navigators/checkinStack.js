import React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import CheckIn from '~/pages/CheckIn';

import { useAuth } from '~/contexts/auth';

const StackNav = createStackNavigator();

const CheckinStack = () => {
  const { signOut } = useAuth();

  return (
    <StackNav.Navigator
      screenOptions={{
        title: 'Gympoint',
        headerTitle: (props) => <Header {...props} />,

        headerRight: () => (
          <TouchableOpacity onPress={signOut}>
            <Icon name="close" size={20} color="#ee4e64" />
          </TouchableOpacity>
        ),
        keyboardHidesTabBar: true,
        headerTintColor: '#ee4e64',
        headerTitleAlign: 'center',
        headerRightContainerStyle: {
          marginRight: 10,
        },
      }}
    >
      <StackNav.Screen name="Checkin" component={CheckIn} options={{}} />
    </StackNav.Navigator>
  );
};

export default CheckinStack;
