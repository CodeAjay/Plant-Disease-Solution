import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FProfile from './FProfile'; // Import your first tab screen component
import FHome from './FHome'; // Import your second tab screen component

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName='FHome'>
      <Tab.Screen name="FHome" component={FHome} />
      <Tab.Screen name="FProfile" component={FProfile} />
    </Tab.Navigator>
  );
};

export default Tabs;
