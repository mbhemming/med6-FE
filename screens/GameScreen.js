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
  ListView,
  Modal
} from "react-native";
import { WebBrowser } from "expo";
import ImageViewer from 'react-native-image-zoom-viewer';


import ListItemQuestion from "./../components/game-screen/ListItemQuestion"

import Consumer from "./../utils/configContext";
import LoginBtn from "./LoginBtn";

const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });

const dims = Dimensions.get("window");


const images = [{
    // Simplest usage.
    url: 'https://avatars2.githubusercontent.com/u/7970947?v=3&s=460',

     //width: dims.width,
     //height: dims.width,
    // Optional, if you know the image size, you can set the optimization performance

    // You can pass props to <Image />.
    props: {
        // headers: ...
    }
}, {
    props: {
        // Or you can set source directory.
        source: require('../assets/test-image.png')
    }
}]


export default class GameScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            game_num: 99,
          //dataSourceQuestions: ds.cloneWithRows(["Q1", "Q2"]),
            questions_answered: [false, false, false, false],  // keep empty because componentWillMount will init
        };
    }
    update_questions_ansered = () => {
      this.setState({
          questions_answered: [false, false, true, false]
      });
  }

    componentWillMount(){
        // console.log("FFFFFFFFFFFFFFFFFF")
        // console.log(this.props.navigation.state.params.questions)
        //debugger;
        const game_number = this.props.navigation.state.params.game_num;
        // if (game_number == 1){
        //     this.setState({questions_answered: [false, false, true, false]});
        // }

        this.setState({
            game_num: game_number,
            dataSourceQuestions: ds.cloneWithRows(this.props.navigation.state.params.questions),
        });
    };

  static navigationOptions = {
    header: null
  };

  // <ListItemGameToPlay game_num={rowData.game_num} image1={rowData.game1}/>

  //game_complete={r.game_complete}
  // <ListItemQuestion
  //   type={"true_false"}
  //   image1 = {'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}
  //
  // />

  _hide_answered_question( idx_quest ){
      // debugger;
       const prev_quest_array= this.state.questions_answered;// QUESTION:
       prev_quest_array[ idx_quest ] = true;
      //this.setState({questions_answered: prev_quest_array})
  }

  //    rowID starts indexing at 0
  _renderRow(question, rowID){


      if (this.state.questions_answered[question.num-1] == false){
          return(
              <TouchableOpacity onPress={this._hide_answered_question( rowID )}>
              <ListItemQuestion
                game_num={this.state.game_num}
                question_num={question.num}
                type={question.type}
                image1 = {'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}
                text = {question.text}
                options = {question.options}
                complete = {question.complete}

                submit_answred_question = {this.update_questions_ansered}
              />
              </TouchableOpacity>

          );
      }
      else {
          return(

              <View>
                <Text> In final version, this will be gone </Text>

              </View>
          );
      }


  }


  render() {
      //debugger;
    return (
      <Consumer>
        {ctx => {
          return (
            <View style={styles.container}>
                    <View style={styles.image_container}>
                        <ImageViewer imageUrls={images} enableImageZoom={true}/>
                    </View>

                    <ScrollView style={styles.questions_scrollable_container}>
                        <ListView
                        dataSource={this.state.dataSourceQuestions}
                        renderRow={(rowData, sectionID, rowID, highlightRow) => this._renderRow(rowData, rowID) }
                        />
                    </ScrollView>

            </View>

          );
        }}
      </Consumer>
    );
  }



}

const styles = StyleSheet.create({
  container: {

    flexDirection: 'column',
    width: dims.width,
    height: dims.height,
    backgroundColor: "#fff"
  },
  questions_scrollable_container: {
    width: dims.width,
    height: dims.height-dims.width,
    backgroundColor: "#fff",

},
  image_container: {
    width: dims.width,
    height: dims.width,
    backgroundColor: "#fff",

  }
});
