import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import LoginScreen from '../screens/login/LoginScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
//import StackNavigator from './StackNavigator';


//  There are two parts to this loading the MainTabNavigator and loading all other screens to nav to

export default createAppContainer( createSwitchNavigator( {
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  
  Login: LoginScreen,
  Main: MainTabNavigator,

  Feedback: FeedbackScreen,

} ) );
