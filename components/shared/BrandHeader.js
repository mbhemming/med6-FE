import React from 'react';

import { View, Image, Dimensions, StyleSheet } from 'react-native';

import C from './../../assets/constants';

const BAR_HEIGH = 90;
const IMAGE_BOX_WIDTH = BAR_HEIGH; // The image in put in a box ( a View tag)

const IMAGE_PADDING_TOP = 10;

const IMAGE_H = BAR_HEIGH - IMAGE_PADDING_TOP;
const IMAGE_W = BAR_HEIGH - IMAGE_PADDING_TOP;

const dims = Dimensions.get( 'window' );


export default class BrandHeader extends React.Component {
  render() {

    return (

    <View style={ styles.container }>
      <View style={ { width: IMAGE_BOX_WIDTH, height: BAR_HEIGH } }>
        <Image style={ { width: IMAGE_W, height: IMAGE_H } } source={ { uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' } } />
      </View>
    </View>
    );


  }
}

const styles = StyleSheet.create( {
  container: {
    width: C.w,
    height: BAR_HEIGH,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingTop: IMAGE_PADDING_TOP
  },

} );
