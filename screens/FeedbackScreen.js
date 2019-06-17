import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Text, View, Dimensions, StyleSheet, TextInput, Button} from 'react-native';

import axios from "axios";

import TitleHeader from './../components/shared/TitleHeader.js' 

const dims = Dimensions.get("window");

const TEXT_BOX_H = 220;

export default class FeedbackScreen extends React.Component {
  static navigationOptions = {
    title: 'app NEW TITLE.json',
  };

  constructor(props) {
    super(props);
    this.state = { text: 'holder' };
  }

  onPressSubmit(){
    debugger;
    axios.post('/feedbacks', {
    text: this.state.text
  })
  .then(function (response) {
    debugger;
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
     //debugger;
    return (
    	<View style = {styles.container}>
    		<TitleHeader title = {'Feedback: What would you like changed?'} 
    		fontSize = {20}
    		/>

        <View style={{height: TEXT_BOX_H, paddingLeft: 4, paddingRight: 4, boarderRadius: 5}}>
         <TextInput
          style={{height: 220, borderColor: 'black', borderWidth: 1, paddingLeft: 4, paddingRight: 4}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline = {true}
          />
          </View>

          <Button
            onPress={this.onPressSubmit.bind(this)}
            title="Submit"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
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
