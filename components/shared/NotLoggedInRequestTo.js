/*
    Designed for two specific modals to be used in the app. They will hit a login wall
    1) If they try to use a logged in feature without being logged in
    2) If they use the free version for 'n' times, then they hit a wall too
        -doesn't have a back button
    *Another way each differs is the instructions that are given to the user
*/
import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight, SafeAreaView } from 'react-native';
import { withNavigation } from 'react-navigation';

import Modal from "react-native-modal";

import TitleHeader from './TitleHeader.js'
import Button from './Button'

import C from './../../assets/constants';
import colors from './../../assets/colors/colors.js';
import globalStyles from './../../assets/styles/globalStyles';



class NotLoggedInRequestTo extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {

    }
  }

  render_buttons = function(){
    const {navigate} = this.props.navigation;

    if(this.props.onPressBack){
        return(
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Button title="Back" onPress={this.props.onPressBack} />
              <Button title="Sign Up" onPress={() => {
                  navigate("SignUp");
                  this.props.change_modal_visible();
                }
              } />
              <Button title="Login" onPress={() => {
                  navigate("Login");
                  this.props.change_modal_visible();
                }
              } />
             </View>
      );
    }
    else {
      return(
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>
        <Button title="Sign Up" onPress={() => {
                  navigate("SignUp");
                  this.props.change_modal_visible();
                }
              } />
              <Button title="Login" onPress={() => {
                  navigate("Login");
                  this.props.change_modal_visible();
                }
              } />
        </View>
      );
    }
    
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */

    //debugger;

    

    return (

     

      
        <Modal 
          isVisible={this.props.modalVisible}
          deviceWidth={C.w}
          deviceHeight={C.h}
          >
          
          <View style={{ flex: 1, backgroundColor: colors.black, borderRadius: 20, marginTop: 30 }}>

            <View style={{ flex: 40/100}}>
             </View>
            <View style={{ flex: 10/100, alignItems: 'center'}}>
              <Text style = {styles.instructions}> {this.props.instructions} </Text>
             </View>

             <View style={{ flex: 10/100}}>
              {this.render_buttons()}
             </View>
            
            <View style={{ flex: 40/100}}>
             </View>
         
            
            
          </View>
          
          
        </Modal>
      

        


    );
  }
}

const styles = StyleSheet.create( {
  instructions: {
    fontSize: 15,
    color: "red"
  }


} );

export default withNavigation(NotLoggedInRequestTo);
