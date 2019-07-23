/*

speical notes:
-the button for favorite meditations is different than the other buttons. It acts
    as a shortcut the the FavMed screen
-this screen fetches all meditations, then the filtering is done on the front-end
*/






import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import { Text, View, StyleSheet, ScrollView, FlatList, SafeAreaView} from 'react-native';
import axios from 'axios';
import _ from 'lodash';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Button from 'react-native-button';
//import AwesomeButton from "react-native-really-awesome-button";
import AwesomeButtonRick from 'react-native-really-awesome-button/src/themes/rick';

import ListScreen from './../components/shared/ListScreen.js'
import ListItemTextLeftAndRight from './../components/shared/ListScreen/ListItemTextLeftAndRight'

import colors from './../assets/colors/colors.js';
import globalStyles from './../assets/styles/globalStyles';
import C from './../assets/constants';

const TITLE_H = 60;

const ALL_BTNS_CNTR_H = 125;
const BTN_TEXT_COL = colors.black;

const BTN_COLOR_OFF = colors.interactive;
const BTN_COLOR_ON = colors.interactive_plus;

const btn_labels = ['Love & Kindness',
                   'Favorites', 'Better Sleep', 'Creativity & Inspiration', 'Productivity & Focus', 'Calm & Peace']

//const all_meds = [];

export default class ChooseMedScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  constructor(props) {
    const init_col = colors.interactive;



    // //debugger;
    // axios.get('/meds')
    // .then((res) => {
    //   //debugger;
    //   var arr = res.data;

    //   // select only name and n_times from each meditation opbject
    // var meds_formatted = _.map(
    // arr, 
    // function(med) {
    //     //debugger;
    //     return { 
    //         topics: med.topics, 
    //         _id: med._id, 
    //         name: med.name,  
    //         duration: med.duration,

    //         left: med.name,
    //         right: med.duration

    //       };
    // }
    // );

    //   //save one copy that will not be mutated(filtered)
    //   //keep another copy to be the current results from the query
    //   this.setState({meds_formatted_and_filtered: meds_formatted});
    //   this.setState({meds_formatted: meds_formatted});
    //   //all_meds = meds_formatted;

    //   //debugger;
    // // console.log(response.data);
    // // console.log(response.status);
    // // console.log(response.statusText);
    // // console.log(response.headers);
    // // console.log(response.config);
    // })
    // .catch((e) => {
    //   //debugger;
    // })





    super(props);
    this.state = { 
                  dur_range_0_to_10: [0, 10], // in units of 0 to 10

                  set_of_topics: [],   //these can be mood etc. only 

                  meds_formatted: [], // array of { left: med.name, right: item.duration + " minutes" }

                  btn_color: [BTN_COLOR_OFF,BTN_COLOR_OFF,BTN_COLOR_OFF,BTN_COLOR_OFF,BTN_COLOR_OFF,BTN_COLOR_OFF],

                  //temp
                  btn_col: 'purple'
                   };  


      this._handle_btn = this._handle_btn.bind(this);   
  }

  componentWillMount(){
    // //this.setState({fav_meds: [{key: 'a'}, {key: 'zzz'}, {key: 'a'}, {key: 'zzz'}]});

    //debugger;
    axios.post('/meds_query', {t_low: 10, t_high: 16, topics: ["t1", "t5"]})
    .then((res) => {
      //debugger;
      var arr = res.data;

      // select only name and n_times from each meditation opbject
    var meds_formatted = _.map(
    arr, 
    function(j) {
        //debugger;
        return { left: j.name, right: j.duration, _id_item: j._id };
    }
    );
      //debugger;
      this.setState({meds_formatted: meds_formatted});
      //debugger;
    })
    .catch((e) => {
      //debugger;
    })
    .finally(()=>{
      //debugger;
    })


    /////// next part - used when testing to see if storing all the meds in a constant will work
    //this.setState({meds_formatted: all_meds})


  }

  _handle_btn(num) {
    
    if(this.state.btn_color[num] === BTN_COLOR_OFF){
      const arr = this.state.btn_color;
      arr[num] = BTN_COLOR_ON;
      this.setState({btn_color: arr})
    }
    else if(this.state.btn_color[num] === BTN_COLOR_ON){
      const arr = this.state.btn_color;
      arr[num] = BTN_COLOR_OFF;
      this.setState({btn_color: arr})
    }
    else{

    }
  }

  _renderRow = ({item}) => {
    //debugger;
    
      return (
      <ListItemTextLeftAndRight left={ item.left }
                                right={ item.right }
                                _id_list_item={ item._id_item }
                                nav_screen_name={ "PlayMed" } />
      );
    }

  //nav = {this.props.navigation.navigate}
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
     //debugger;


    return (
           <View style={ globalStyles.total_screen_container }>
           <SafeAreaView style={globalStyles.safe_area}>
            <View style={ styles.title_con }>
              <Text style={ { fontSize: 20, color: colors.primary } }> Choose Your Meditation </Text>
            </View>

            <View style = { styles.slider_con }>
              <Text> {this.state.dur_range_0_to_10[0]} min</Text>
              <MultiSlider
              sliderLength = {190}
              enabledTwo = {true}
              values = {this.state.dur_range_0_to_10}
              />
              <Text> {this.state.dur_range_0_to_10[1]} min </Text>
            </View>



            <View style = { { width: C.w, height: ALL_BTNS_CNTR_H}  }>
              <View style = { styles.btn_row }>
                <View style = { { width: C.w/3, height: ALL_BTNS_CNTR_H/2, justifyContent: 'flex-end', flexDirection: 'column', paddingRight: 5} }>
                  <AwesomeButtonRick 
                  backgroundColor = {this.state.btn_color[0]} 
                  onPress={() => this._handle_btn(0)}
                  textSize = {11}
                  textColor = {BTN_TEXT_COL}
                  >
                    {btn_labels[0]}
                  </AwesomeButtonRick>
                </View>
                <View style = { {width: C.w/3, height: ALL_BTNS_CNTR_H/2, justifyContent: 'flex-end', flexDirection: 'column', paddingRight: 5} }>
                  <AwesomeButtonRick 
                  backgroundColor = {this.state.btn_color[1]} 
                  onPress={() => this.props.navigation.navigate('FavMed')}
                  textSize = {11}
                  textColor = {BTN_TEXT_COL}
                  >
                    {btn_labels[1]}
                  </AwesomeButtonRick>
                </View>
                <View style = { {width: C.w/3, height: ALL_BTNS_CNTR_H/2, justifyContent: 'flex-end', flexDirection: 'column', paddingRight: 5} }>
                  <AwesomeButtonRick 
                  backgroundColor = {this.state.btn_color[2]} 
                  onPress={() => this._handle_btn(2)}
                  textSize = {11}
                  textColor = {BTN_TEXT_COL}
                  >
                    {btn_labels[2]}
                  </AwesomeButtonRick>
                </View>


              </View>


              <View style = { styles.btn_row }>
                <View style = { {width: C.w/3, height: ALL_BTNS_CNTR_H/2, justifyContent: 'flex-end', flexDirection: 'column', paddingRight: 5} }>
                  <AwesomeButtonRick 
                  backgroundColor = {this.state.btn_color[3]} 
                  onPress={() => this._handle_btn(3)}
                  textSize = {11}
                  textColor = {BTN_TEXT_COL}
                  >
                    {btn_labels[3]}
                  </AwesomeButtonRick>
                </View>
                <View style = { {width: C.w/3, height: ALL_BTNS_CNTR_H/2, justifyContent: 'flex-end', flexDirection: 'column', paddingRight: 5} }>
                  <AwesomeButtonRick 
                  backgroundColor = {this.state.btn_color[4]} 
                  onPress={() => this._handle_btn(4)}
                  textSize = {11}
                  textColor = {BTN_TEXT_COL}
                  >
                    {btn_labels[4]}
                  </AwesomeButtonRick>
                </View>
                <View style = { {width: C.w/3, height: ALL_BTNS_CNTR_H/2, justifyContent: 'flex-end', flexDirection: 'column', paddingRight: 5} }>
                  <AwesomeButtonRick 
                  backgroundColor = {this.state.btn_color[5]} 
                  onPress={() => this._handle_btn(5)}
                  textColor = {BTN_TEXT_COL}
                  >
                    {btn_labels[5]}
                  </AwesomeButtonRick>
                </View>

            </View>

            </View>



            
              <View style={ {height: C.h - ALL_BTNS_CNTR_H - TITLE_H - C.tab_bar_height} }>
                <ScrollView>
                  <FlatList data={ this.state.meds_formatted } renderItem={ this._renderRow } />
                </ScrollView>
              </View>



              </SafeAreaView>
          </View>
          );
  }
}


const styles = StyleSheet.create( {
  title_con: {
    height: TITLE_H, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  slider_con: {
    backgroundColor: colors.black, 
    width: C.w, 
    height: 65, 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  btn_row: {
    width: C.w,
    height: ALL_BTNS_CNTR_H/2,
    flexDirection: 'row',
    //flex: 1,
    //justifyContent: 'space-between',
    borderBottomWidth: 1
  },

} );

