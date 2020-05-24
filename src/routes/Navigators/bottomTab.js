import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';

import CheckIn from '~/routes/Navigators/checkinStack';
import HelpOrders from '~/routes/Navigators/helpOrderStack';

const BottomNav = createBottomTabNavigator();

const BottomNavigator = () => {
  const tabBarOptions = {
    keyboardHidesTabBar: true,
    activeTintColor: '#ee4e64',
    inactiveTintColor: '#999',
    style: {
      backgroundColor: '#FFF',
    },
  };

  const CheckInScreenOptions = {
    tabBarLabel: 'Check-ins',
    tabBarIcon: ({ color, size }) => (
      <Icon name="location-on" size={size} color={color} />
    ),
  };

  const HelpOrdersScreenOptions = {
    tabBarLabel: 'Pedir Ajuda',
    tabBarIcon: ({ color, size }) => (
      <Icon name="live-help" size={size} color={color} />
    ),
    unmountOnBlur: true,
  };

  return (
    <BottomNav.Navigator tabBarOptions={tabBarOptions}>
      <BottomNav.Screen
        name="Checkin"
        component={CheckIn}
        options={CheckInScreenOptions}
      />
      <BottomNav.Screen
        name="HelpOrders"
        component={HelpOrders}
        options={HelpOrdersScreenOptions}
        unmount
      />
    </BottomNav.Navigator>
  );
};

export default BottomNavigator;
