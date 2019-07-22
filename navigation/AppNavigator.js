import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import FavMedScreen from '../screens/FavMedScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import ChooseMedScreen from '../screens/ChooseMedScreen';

// Screens similar to login
import LoginScreen from '../screens/login/LoginScreen';

//import StackNavigator from './StackNavigator';


//  There are two parts to this loading the MainTabNavigator and loading all other screens to nav to

export default createAppContainer( createSwitchNavigator( {
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  
  // IN DEVELOPMENT
  //FavMed: FavMedScreen,
  //Feedback: FeedbackScreen,
	// Login: LoginScreen,
	//ChooseMed: ChooseMedScreen,

  Main: MainTabNavigator,

  

} ) );
