import React from 'react';

import { View, Button, StyleSheet } from 'react-native';

import C from './../../assets/constants';
import colors from './../../assets/colors/colors';


export default class Button2 extends React.Component {

  constructor( props ) {
    super( props );
    this.state = {
      width: this.props.width,
      height: this.props.height
    }
  }

  render() {

    return (

    <View style={ { width: this.props.width, height: this.props.height } }>
      <Button onPress={ this.props.onPress }
              title={ this.props.title }
              color={ this.props.color } />
    </View>
    );


  }
}

// const styles = StyleSheet.create({
//   con: {
//     //width: this.state.width, 
//     //height: this.state.height,

//     paddingTop: 5,
//     paddingRight: 5,
//     flexDirection: 'row', 
//     //flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     //borderBottomWidth:1,
//     backgroundColor: colors.black_lighter
//   },

// });
