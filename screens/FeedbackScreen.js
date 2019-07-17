import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Text, View, Dimensions, StyleSheet, TextInput, Button} from 'react-native';

import axios from "axios";

import TitleHeader from './../components/shared/TitleHeader.js' 

import colors from './../assets/colors/colors.js';
import globalStyles from './../assets/styles/globalStyles';
import C from './../assets/constants';


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
    //debugger;
    axios.post('/feedbacks', {
    text: this.state.text
  })
  .then(function (response) {
    //debugger;
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
    	<View style = {globalStyles.total_screen_container}>
    		<TitleHeader title = {'Feedback: What would you like changed?'} 
    		fontSize = {20}
    		/>

        <View style={ globalStyles.container_all_below_title }>
        <View style={{height: TEXT_BOX_H, paddingLeft: 4, paddingRight: 4, boarderRadius: 5}}>
         <TextInput
          style={{height: 220, borderColor: 'black', paddingLeft: 4, paddingRight: 4, backgroundColor: colors.white}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline = {true}
          />
          </View>

          <Button
            onPress={this.onPressSubmit.bind(this)}
            title="Submit"
            color={colors.interactive}
            accessibilityLabel="Learn more about this purple button"
            />

            </View>


    	</View>
    	);
  }
}

const styles = StyleSheet.create({
  // container: {
  //   width: C.w, 
  //   height: C.h, 
  //   //flexDirection: 'column', 
  //   //flex: 1,
  //   //justifyContent: 'space-around',
  //   borderBottomWidth:1,
  //   backgroundColor: colors.black
  // },
  
});
