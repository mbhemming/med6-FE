import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ListView
} from "react-native";

import {SecureStore} from 'expo';

import axios from "axios";

import { MonoText } from "../components/StyledText";


import LoginBtn from "./LoginBtn";



const dims = Dimensions.get("window");

const logo_container_height = dims.height / 2.5;

const logo_width = 200;
const logo_height = 200;

//const BASE_URL = "http://localhost:3000";
const BASE_URL = "http://garagan-meditation.appspot.com";

export default class HomeScreen extends React.Component {



  static navigationOptions = {
    header: null
  };

  async _store_token(tok){
      try{
          await SecureStore.setItemAsync('secure_token',tok);
          const token2 = await SecureStore.getItemAsync('secure_token');
          debugger;
      }
      catch(e){
          console.log(e.message)
      }


  }

  componentWillMount(){

     axios({
  method: 'post',
  url: BASE_URL + '/users/login',
  data: {
      email: "email1@mail.com",
    password: "passpass"
  }
})
  .then((res) => {
    console.log(res);
    debugger;
    this._store_token(res.data.token);
    //return await SecureStore.setItemAsync('secure_token',tok);
    return 1;


})


// .then(async function (res) {
//   //console.log(res);
//
//   _//store_token(res.token);
//   const token = await SecureStore.getItemAsync('secure_token');
//   debuger;
//   return token;
//
//
// })
  .catch(function (error) {
    //console.log(error);
  });


  }

  render() {
    return (
        <Image
          style={{ width: logo_width, height: logo_height }}
          source={require("../assets/images/sherlock-logo.jpg")}
        />
    );
  }

  _moveToGame(game) {
      //console.log("RRRRRRRRR")
      //console.log(game)
    this.props.navigation.navigate('GameScreen',    game);
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logo_container: {
    width: dims.width,
    height: logo_container_height,
    backgroundColor: "#fff",

    alignItems: 'center',
    justifyContent: "center"
  }
});
