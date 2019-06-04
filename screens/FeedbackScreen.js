import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import { Text, View, Dimensions, StyleSheet} from 'react-native';

import TitleHeader from './../components/shared/TitleHeader.js' 

const dims = Dimensions.get("window");

export default class FeedbackScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
    	<View style = {styles.container}>
    		<TitleHeader title = 'Feedback: What would you like changed' 
    		fontSize = {10}
    		/>
    	</View>
    	);
  }
}

const styles = StyleSheet.create({
  container: {
    width: dims.width, 
    height: dims.height-5, 
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    borderBottomWidth:1
  },
  
});
