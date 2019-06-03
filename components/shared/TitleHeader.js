/*
  A header that has a branding image and a title that is centred
*/

import React from 'react';

import { View, Image, Dimensions, StyleSheet, Text } from 'react-native';

import BrandHeader from './BrandHeader'

const TITLE_HEIGHT = 70;

const dims = Dimensions.get("window");


export default class TitleHeader extends React.Component {
  render() {

      return (
            
            <View style ={ styles.container}> 

              <BrandHeader/>

              <View style ={{width: dims.width, height: TITLE_HEIGHT, justifyContent: 'center', alignItems: 'center'}} >
                <Text style = {{fontSize:30}}> {this.props.title} </Text>
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
    justifyContent: 'space-around',
    borderBottomWidth:1
  },
  
});
