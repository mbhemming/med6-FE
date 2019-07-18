

import React, { Component } from 'react';
import { View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView, StyleSheet } from 'react-native';
//import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import colors from './../../assets/colors/colors.js';
import globalStyles from './../../assets/styles/globalStyles';
import C from './../../assets/constants';


import logo from '../../assets/images/check.png';

const IMAGE_HEIGHT = 300;
const IMAGE_HEIGHT_SMALL = 100;

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }

  componentWillMount () {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
    this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT_SMALL,
    }).start();
  };

  keyboardWillHide = (event) => {
    Animated.timing(this.imageHeight, {
      duration: event.duration,
      toValue: IMAGE_HEIGHT,
    }).start();
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      	<View style={styles.image_con}>
          <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight }]} />
        </View>

        <View style={styles.text_input_con}>
          <TextInput
            placeholder="Email"
            style={styles.input}
          />
          <TextInput
            placeholder="Username"
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
          />
          <TextInput
            placeholder="Confirm Password"
            style={styles.input}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
};



const styles = StyleSheet.create({
	container: {
    //width: C.w, 
    height: C.h, 
    backgroundColor: colors.black,
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    //borderBottomWidth:1,
  },
  image_con: {
    width: C.w, 
    //height: IMAGE_HEIGHT, 
    backgroundColor: colors.black,
    //flexDirection: 'column', 
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //borderBottomWidth:1,
  },
  text_input_con: {
    width: C.w, 
    //height: IMAGE_HEIGHT, 
    backgroundColor: colors.black_lighter,
    //flexDirection: 'column', 
    //flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //borderBottomWidth:1,
  },
  input: {
    width: C.w, 
    height: 35, 
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    //borderBottomWidth:1,
    backgroundColor: colors.white,
    borderRadius: 5,
    borderBottomWidth:5,

  },
  
});
