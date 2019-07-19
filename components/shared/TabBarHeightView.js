import React from 'react';

import { View, Button, StyleSheet } from 'react-native';

import C from './../../assets/constants';
import colors from './../../assets/colors/colors';


export default class TabBarHeightView extends React.Component {

  constructor( props ) {
    super( props );
  }

  render() {

    return (

    <View style={ { width: C.w, height: C.tab_bar_height, backgroundColor: this.props.color } }>
      
    </View>
    );


  }
}


