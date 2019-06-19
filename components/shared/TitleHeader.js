/*
  A header that has a branding image and a title that is centred
*/

import React from 'react';

import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';

import BrandHeader from './BrandHeader'

import colors from './../../assets/colors/colors.js'

const TITLE_HEIGHT = 75;

const dims = Dimensions.get("window");


export default class TitleHeader extends React.Component {
  render() {
      const { title, fontSize } = this.props;
      return (
            
            <View style ={ styles.container}> 

              <BrandHeader/>

              <View style ={styles.text_contain} >
                <Text style = {{fontSize: fontSize, flex: 1, flexWrap: 'wrap', color: colors.primary}}> {title} </Text>
              </View>
            </View>
          );


  }
}

const styles = StyleSheet.create({
  container: {
    width: dims.width, 
    height: 180, 
    flexDirection: 'column', 
    //flex: 1,
    justifyContent: 'space-between',
    borderBottomWidth:1
  },
  text_contain: {
    width: dims.width, 
    height: TITLE_HEIGHT, 
    justifyContent: 'center', 
    alignItems: 'center',
    borderWidth: 1
  }
  
});
