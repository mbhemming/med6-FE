/*
    
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

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */

    //debugger;

    const {navigate} = this.props.navigation;

    return (

     

      
        <Modal 
          isVisible={this.props.modalVisible}
          deviceWidth={C.w}
          deviceHeight={C.h}
          >
          
          <View style={{ flex: 1, backgroundColor: colors.black, borderRadius: 20, marginTop: 30 }}>

            <View style={{ flex: 40/100}}>
             </View>
            <View style={{ flex: 10/100}}>
             </View>
            <View style={{ flex: 10/100, flexDirection: 'row', justifyContent: 'space-between'}}>
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
            <View style={{ flex: 40/100}}>
             </View>
         
            
            
          </View>
          
          
        </Modal>
      

        


    );
  }
}

const styles = StyleSheet.create( {



} );

export default withNavigation(NotLoggedInRequestTo);
