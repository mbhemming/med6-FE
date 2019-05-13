import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import HelpScreen from '../screens/HelpScreen';
import SettingsScreen from '../screens/SettingsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    package={"ionicons"}
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-list-box${focused ? '' : '-outline'}`
          : 'md-list-box'
      }
    />
  ),
};

const RankStack = createStackNavigator({
  Help: HelpScreen,
});

RankStack.navigationOptions = {
  tabBarLabel: 'Rank',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    package={"ionicons"}
      focused={focused}
      name={Platform.OS === 'ios' ? 'md-list' : 'md-list'}
    />
  ),
};



const HelpStack = createStackNavigator({
  Help: HelpScreen,
});

HelpStack.navigationOptions = {
  tabBarLabel: 'How to Play',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    package={"ionicons"}
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-information-circle' : 'md-help'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Feedback/Contact',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
    package={"materialicons"}
      focused={focused}
      name={Platform.OS === 'ios' ? 'contact-mail' : 'contact-mail'}
    />
  ),
};



export default createBottomTabNavigator({
  HomeStack,
  RankStack,
  HelpStack,
  SettingsStack,
});
