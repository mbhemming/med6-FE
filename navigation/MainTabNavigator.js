
import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import HelpScreen from '../screens/HelpScreen';
//import SettingsScreen from '../screens/SettingsScreen';


import JournalScreen from '../screens/JournalScreen';
import MedLogScreen from '../screens/MedLogScreen';
import FeedbackScreen from '../screens/FeedbackScreen';
import FavMedScreen from '../screens/FavMedScreen';
import ChooseMedScreen from '../screens/ChooseMedScreen';

import JournalReadScreen from '../screens/JournalReadScreen';

import LoginScreen from '../screens/login/LoginScreen';
import SignUpScreen from '../screens/login/SignUpScreen';

const HomeStack = createStackNavigator( {
  Home: HomeScreen,
  ChooseMed: ChooseMedScreen,
  FavMed: FavMedScreen,

  Login: LoginScreen,
  SignUp: SignUpScreen
} );

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => (
    <TabBarIcon package={ "materialicons" }
                focused={ focused }
                name={ Platform.OS === 'ios'
                         ? `home${focused ? '' : '-outline'}`
                         : 'home' } />
  ),
};




const JournalStack = createStackNavigator( {
  Journal: JournalScreen,
  JournalRead: JournalReadScreen,

  Login: LoginScreen,
  SignUp: SignUpScreen
} );

JournalStack.navigationOptions = {
  tabBarLabel: 'Journal',
  tabBarIcon: ({focused}) => (
    <TabBarIcon package={ "materialicons" }
                focused={ focused }
                name={ Platform.OS === 'ios' ? 'book' : 'md-book' } />
  ),
};



const MedLogStack = createStackNavigator( {
  MedLog: MedLogScreen,

  Login: LoginScreen,
  SignUp: SignUpScreen
} );

MedLogStack.navigationOptions = {
  tabBarLabel: 'History',
  tabBarIcon: ({focused}) => (
    <TabBarIcon package={ "materialicons" }
                focused={ focused }
                name={ Platform.OS === 'ios' ? 'assignment' : 'assignment' } />
  ),
};



const FeedbackStack = createStackNavigator( {
  Feedback: FeedbackScreen,

  Login: LoginScreen,
  SignUp: SignUpScreen
} );

FeedbackStack.navigationOptions = {
  tabBarLabel: 'Feedback',
  tabBarIcon: ({focused}) => (
    <TabBarIcon package={ "materialicons" }
                focused={ focused }
                name={ Platform.OS === 'ios' ? 'feedback' : 'feedback' } />
  ),
};



const FavMedStack = createStackNavigator( {
  FavMed: FavMedScreen,
  Home: HomeScreen,
  
  Login: LoginScreen,
  SignUp: SignUpScreen

} );

FavMedStack.navigationOptions = {
  tabBarLabel: 'Favorites',
  tabBarIcon: ({focused}) => (
    <TabBarIcon package={ "ionicons" }
                focused={ focused }
                name={ Platform.OS === 'ios' ? 'ios-bookmark' : 'md-bookmark' } />
  ),
};



export default createBottomTabNavigator( {
  HomeStack,

  JournalStack,
  MedLogStack,
  FeedbackStack,
  FavMedStack,


} );
