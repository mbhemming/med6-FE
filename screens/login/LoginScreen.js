

import React, { Component } from 'react';


import LoginPlus from './../../components/shared/LoginPlus'

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
    return (
      <LoginPlus 
      	text1 = {this.state.text1} 
        onChangeText1={(text) => this.setState({text1:text})}
        keyboardType1 = {'email-address'}


      	text2 = {this.state.text2} 
        onChangeText2={(text) => this.setState({text2:text})}
        secureTextEntry2 = {true}

      	button_title = {"Login"} 
        onPress={() => {this.props.navigation.navigate('Main'); }   }

      	/>
    );
  }
};



