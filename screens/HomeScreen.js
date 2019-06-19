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
//const BASE_URL = "http://garagan-meditation.appspot.com";
axios.defaults.baseURL = "http://localhost:3000";
//axios.defaults.baseURL = "http://garagan-meditation.appspot.com";


export default class HomeScreen extends React.Component {



  static navigationOptions = {
    header: null
  };

  async _store_token(tok){
      try{
          await SecureStore.setItemAsync('secure_token',tok);
          const token2 = await SecureStore.getItemAsync('secure_token');
          //debugger;
      }
      catch(e){
          console.log(e.message)
      }


  }

  componentWillMount(){
    //debugger;

    axios.defaults.headers.common['Authorization'] = "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2Q0NThmNjViNjE2OTZlZjk1ZGMwMmMiLCJpYXQiOjE1NTc4MDAxMTN9.uKkvJFt5vJ9CkP04_2ZFCs8FaE4AqU5zcMVs3ldX0wg';  /// remove later
    

//      axios({
//   method: 'post',
//   url: '/users/login',
//   data: {
//       email: "email1@mail.com",
//     password: "passpass"
//   }
// })
//   .then((res) => {
//     console.log(res);
//     //debugger;

//     axios.defaults.headers.common['Authorization'] = "Bearer " + res.data.token;

//     //this._store_token(res.data.token);  Don't need this now that I'm setting header globally
//     //return await SecureStore.setItemAsync('secure_token',tok);
//     return 1;


// })
//   .catch(function (error) {
//     debugger;
//     console.log(error);
//   });









// .then(async function (res) {
//   //console.log(res);

//   _//store_token(res.token);
//   const token = await SecureStore.getItemAsync('secure_token');
//   debuger;
//   return token;


// })
//   .catch(function (error) {
//     //console.log(error);
//   });


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
