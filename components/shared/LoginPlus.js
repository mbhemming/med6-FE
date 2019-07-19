/*
  based off of code at https://www.freecodecamp.org/news/how-to-make-your-react-native-app-respond-gracefully-when-the-keyboard-pops-up-7442c1535580/
  ***IT WANTS ME TO ADD SOMETHING INTO THE ANDROID MANIFEST
*/

import React, { Component } from 'react';
import { View, TextInput, Image, Animated, Keyboard, KeyboardAvoidingView, StyleSheet, SafeAreaView } from 'react-native';
//import styles, { IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL } from './styles';
import colors from './../../assets/colors/colors.js';
import globalStyles from './../../assets/styles/globalStyles';
import C from './../../assets/constants';

import Button from './Button'
import TextInputLogin from './LoginPlus/TextInputLogin'
import TabBarHeightView from './TabBarHeightView' 


import logo from '../../assets/images/check.png';

const IMAGE_HEIGHT = 300;
const IMAGE_HEIGHT_SMALL = 100;

export default class LoginPlus extends React.Component {
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

  //  render the correct number of text inputs
  renderTextInputs = function(){

    if(this.props.text4) {
        return (
            <View style={styles.text_input_con}>
          <TextInputLogin
            placeholder={this.props.text1}
            onChangeText = {this.props.onChangeText1}
            keyboardType = {this.props.keyboardType1}
            secureTextEntry = {this.props.secureTextEntry1}
          />
          <TextInputLogin
            placeholder={this.props.text2}
            onChangeText = {this.props.onChangeText2}  
            keyboardType = {this.props.keyboardType2} 
            secureTextEntry = {this.props.secureTextEntry2} 
          />
          <TextInputLogin
            placeholder={this.props.text3}
            onChangeText = {this.props.onChangeText3}
            keyboardType = {this.props.keyboardType3}
            secureTextEntry = {this.props.secureTextEntry3}
          />
          <TextInputLogin
            placeholder={this.props.text4}
            onChangeText = {this.props.onChangeText4}
            keyboardType = {this.props.keyboardType4}
            secureTextEntry = {this.props.secureTextEntry4}
          />
        </View>
        )
    }
    else if(this.props.text3) {
        return (
            <View style={styles.text_input_con}>
          <TextInputLogin
            placeholder={this.props.text1}
            onChangeText = {this.props.onChangeText1}
            keyboardType = {this.props.keyboardType1}
            secureTextEntry = {this.props.secureTextEntry1}
          />
          <TextInputLogin
            placeholder={this.props.text2}
            onChangeText = {this.props.onChangeText2}
            keyboardType = {this.props.keyboardType2}
            secureTextEntry = {this.props.secureTextEntry2}
          />
          <TextInputLogin
            placeholder={this.props.text3}
            onChangeText = {this.props.onChangeText3}
            keyboardType = {this.props.keyboardType3}
            secureTextEntry = {this.props.secureTextEntry3}
          />
        </View>
        )
    }
    else if(this.props.text2) {
        return (
            <View style={styles.text_input_con}>
          <TextInputLogin
            placeholder={this.props.text1}
            onChangeText = {this.props.onChangeText1}
            keyboardType = {this.props.keyboardType1}
            secureTextEntry = {this.props.secureTextEntry1}
          />
          <TextInputLogin
            placeholder={this.props.text2}
            onChangeText = {this.props.onChangeText2}
            keyboardType = {this.props.keyboardType2}
            secureTextEntry = {this.props.secureTextEntry2}
          />
        </View>
        )
    }
    else if(this.props.text1) {
        return (
            <View style={styles.text_input_con}>
          <TextInputLogin
            placeholder={this.props.text1}
            onChangeText = {this.props.onChangeText1}
            keyboardType = {this.props.keyboardType1}
            secureTextEntry = {this.props.secureTextEntry1}
          />
        </View>
        )
    }


};

  render() {
    return (
    <SafeAreaView style={globalStyles.safe_area}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
        
      >
      
        <View style={styles.image_con}>
          <Animated.Image source={logo} style={[styles.logo, { height: this.imageHeight, width: this.imageHeight }]} />
        </View>

        {this.renderTextInputs()}

        <Button 
          title = {this.props.button_title}
          onPress = {this.props.onPress}
          />

        <TabBarHeightView color = {colors.black_lighter}/>

        
      </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
};



const styles = StyleSheet.create({
  container: {
    //width: C.w, 
    height: C.h - C.tab_bar_height, 
    backgroundColor: colors.black,
    //flexDirection: 'column', 
    //flex: 1,
    justifyContent: 'space-between',
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
