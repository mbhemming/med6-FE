import React from 'react';

import { View, Image, Dimensions, StyleSheet } from 'react-native';

const BAR_HEIGH = 70;
const IMAGE_BOX_WIDTH = BAR_HEIGH; // The image in put in a box ( a View tag)

const dims = Dimensions.get("window");


export default class TabBarIcon extends React.Component {
  render() {

      return (
            
            <View style ={ styles.container}> 

              <View style ={{width: IMAGE_BOX_WIDTH, height: BAR_HEIGH}} >
                <Image
                style={{width: 80, height: 80}}
                source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
                />
              </View>
            </View>
          );


  }
}

const styles = StyleSheet.create({
  container: {
    width: dims.width, 
    height: BAR_HEIGH, 
    flexDirection: 'row', 
    justifyContent: 'flex-end',
    paddingRight: 20,
    paddingTop: 10
  },
  
});
