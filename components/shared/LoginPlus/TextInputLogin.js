import React from 'react';

import { TextInput, StyleSheet } from 'react-native';

import C from './../../../assets/constants';
import colors from './../../../assets/colors/colors';


export default class TextInputLogin extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      
    }
  }

  render() {


    return (

      

    <TextInput
            placeholder={this.props.placeholder}
            onChangeText = {this.props.onChangeText1}
            style={styles.input}
            autoCorrect = {false}
            keyboardType = {this.props.keyboardType}
            secureTextEntry = {this.props.secureTextEntry}
            
          />
    );


  }
}

const styles = StyleSheet.create({
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

