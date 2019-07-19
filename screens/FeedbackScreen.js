/*

CODE INSPIRATIONS:
-https://stackoverflow.com/questions/47798659/keyboardavoidingview-overlapping-screen-on-iphone-x
  -adds padding for KeyboardAvoidingView
*/

import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Text, View, KeyboardAvoidingView, Dimensions, StyleSheet, TextInput, Button, Platform, SafeAreaView, Keyboard, NativeModules, StatusBarIOS} from 'react-native';

import axios from "axios";

import TitleHeader from './../components/shared/TitleHeader.js' 
import TabBarHeightView from './../components/shared/TabBarHeightView' 
import DismissKeyboard from './../components/shared/DismissKeyboard'

import colors from './../assets/colors/colors.js';
import globalStyles from './../assets/styles/globalStyles';
import C from './../assets/constants';

const {StatusBarManager} = NativeModules;

const TEXT_BOX_H = 220;

export default class FeedbackScreen extends React.Component {
  static navigationOptions = {
    title: 'app NEW TITLE.json',
  };

  constructor(props) {
    super(props);
    this.state = { 
      text: '',
      statusBarHeight: 0

    };
  }

  componentDidMount() {
    StatusBarManager.getHeight((statusBarFrameData) => {
      this.setState({statusBarHeight: statusBarFrameData.height});
    });
    this.statusBarListener = StatusBarIOS.addListener('statusBarFrameWillChange', (statusBarData) => {
      this.setState({statusBarHeight: statusBarData.frame.height});
    });
  }

  componentWillUnmount() {
    this.statusBarListener.remove();
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
      <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}
                style={{ flex: 1}}
                keyboardVerticalOffset={44 + this.state.statusBarHeight}
            >
      <SafeAreaView style={globalStyles.safe_area}>
      <DismissKeyboard>
      <View style = {globalStyles.total_screen_container}>
        <TitleHeader title = {'Feedback: What would you like changed?'} 
        fontSize = {20}
        />

        <View style={ globalStyles.container_all_below_title }>
        <View style={{flex: 1, paddingLeft: 4, paddingRight: 4, boarderRadius: 5}}>
         <TextInput
          style={{flex: 1, borderColor: 'black', paddingLeft: 4, paddingRight: 4, backgroundColor: colors.white}}
          placeholder = {"Feedback"}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          multiline = {true}
          />
          </View >

          <View style = {{height: 50}}>
          <Button
            onPress={this.onPressSubmit.bind(this)}
            title="Submit"
            color={colors.interactive}
            accessibilityLabel="Learn more about this purple button"
            />
            </View>

            </View>
            <TabBarHeightView color = {colors.black_lighter}/>


      </View>
      </DismissKeyboard>
      </SafeAreaView>
      </KeyboardAvoidingView>
    	);
  }
}



const styles = StyleSheet.create({
  main: {
        flex: 1,
        backgroundColor: 'red'
    },
    top: {
        flex: 1,
        backgroundColor: 'blue'
    },
    bottom: {
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
  
});
