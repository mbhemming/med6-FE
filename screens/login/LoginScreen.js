

import React, { Component } from 'react';

import LoginPlus from './../../components/shared/LoginPlus'

import colors from './../../assets/colors/colors.js';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    super( props );
    this.state = {
      text1: "Email",
      text2: "Password"
    }
  }

  

  render() {
    const { navigate } = this.props.navigation;

    return (
      <LoginPlus 
      	text1 = {this.state.text1} 
        onChangeText1={(text) => this.setState({text1:text})}
        keyboardType1 = {'email-address'}


      	text2 = {this.state.text2} 
        onChangeText2={(text) => this.setState({text2:text})}
        secureTextEntry2 = {true}

        button_title_left = {"Sign Up"} 
        onPress_left={() => {navigate('Main'); }   }
        color_left = {colors.interactive}

      	button_title_right = {"Forgot Password"} 
        onPress_right={() => {navigate('Main'); }   }
        fontSize = {15}
        color_right = {colors.interactive}

        button_title_center = {"Login"} 
        onPress_center={() => {navigate('Main'); }   }
        color_center = {colors.interactive}



      	/>
    );
  }
};



