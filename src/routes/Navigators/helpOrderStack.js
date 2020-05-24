import React from 'react';
import { TouchableOpacity } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';
import HelpOrderDetails from '~/pages/HelpOrderDetails';
import NewHelpOrder from '~/pages/NewHelpOrder';
import HelpOrders from '~/pages/HelpOrders';

import Header from '~/components/Header';

import { useAuth } from '~/contexts/auth';

const StackNav = createStackNavigator();

const HelpOrderStack = () => {
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
      <StackNav.Screen name="HelpOrders" component={HelpOrders} options={{}} />
      <StackNav.Screen name="NewHelpOrder" component={NewHelpOrder} />
      <StackNav.Screen name="HelpOrderDetails" component={HelpOrderDetails} />
    </StackNav.Navigator>
  );
};

export default HelpOrderStack;
