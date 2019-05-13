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
import { WebBrowser } from "expo";

import { MonoText } from "../components/StyledText";

import Consumer from "./../utils/configContext";
import LoginBtn from "./LoginBtn";
import ListItemGameToPlay from "./../components/home-screen/ListItemGameToPlay"

const dims = Dimensions.get("window");



const logo_container_height = dims.height / 2.5;

const logo_width = 200;
const logo_height = 200;

export default class HomeScreen extends React.Component {



  static navigationOptions = {
    header: null
  };

  // <ListItemGameToPlay game_num={rowData.game_num} image1={rowData.game1}/>
  _renderRow(r){
      return(
          <TouchableOpacity onPress={event => this._moveToGame(r)}>
            <ListItemGameToPlay
                image1 = {'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}
                game_complete={r.game_complete}
                />
          </TouchableOpacity>

      );
  }


  render() {
    return (
      <Consumer>
        {ctx => {
          return (
            <View style={styles.container}>
              <View style={styles.logo_container}>
                <Image
                  style={{ width: logo_width, height: logo_height }}
                  source={require("../assets/images/sherlock-logo.jpg")}
                />
                <Text style={{fontSize: 40}}> The Sherlock Game </Text>
              </View>

              <View style={styles.list_container}>




                <ListView
                  dataSource={ctx.dataSource}
                  renderRow={rowData => this._renderRow(rowData) }
                />

              </View>
            </View>
          );
        }}
      </Consumer>
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
