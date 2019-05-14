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

import axios from "axios";

import { MonoText } from "../components/StyledText";


import LoginBtn from "./LoginBtn";



const dims = Dimensions.get("window");

const logo_container_height = dims.height / 2.5;

const logo_width = 200;
const logo_height = 200;

const base_url = "localhost:3000"

export default class HomeScreen extends React.Component {



  static navigationOptions = {
    header: null
  };

  componentWillMount(){

     debugger;
  //
  //    axios.get('http://localhost:3000/meds')
  // .then(function (response) {
  //   console.log(response);
  //   debugger;
  // })
  // .catch(function (error) {
  //   console.log(error);
  //   debugger;
  // });

     axios({
  method: 'post',
  url: 'http://localhost:3000/users/login',
  data: {
      email: "email1@mail.com",
    password: "passpass"
  }
})
  .then(function (res) {
    //console.log(res);
     
  })
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
