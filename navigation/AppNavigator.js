import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
//import StackNavigator from './StackNavigator';

import GameScreen from '../screens/GameScreen';
//  There are two parts to this loading the MainTabNavigator and loading all other screens to nav to

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: MainTabNavigator,



  GameScreen: {screen: GameScreen},
  //GameScreen: {screen: GameScreen},
  //GameScreen: {screen: GameScreen},
  //GameScreen: {screen: GameScreen},
}));
