import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import { Text, View, StyleSheet, TextInput } from 'react-native';
import axios from 'axios';
import _ from 'lodash';

//import JournalNewEntryOrReadEntry from './../components/shared/JournalNewEntryOrReadEntry.js'

import TitleHeader from './../components/shared/TitleHeader.js'
import Button from './../components/shared/Button.js'


import colors from './../assets/colors/colors.js';
import globalStyles from './../assets/styles/globalStyles';
import C from './../assets/constants';

const TEXT_BODY_H = 220;
const TEXT_TITLE_H = 20;
const PAD = 3;
const PAD_LEFT = 3;

export default class JournalReadScree extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  constructor(props) {
    super(props);
    //debugger;
    this.state = { 
                  //ds_fav_meds: ds.cloneWithRows([])     // pairs of (_id, med_name)
                  //journals_formatted: [] // array of { left: med.name, right: item.duration + " minutes" }
                  _journal: this.props.navigation.state.params._id_sent,
                  last_updated: "",

                  title: "",
                  body: "",
                   };     
  }

  componentWillMount(){
    //this.setState({fav_meds: [{key: 'a'}, {key: 'zzz'}, {key: 'a'}, {key: 'zzz'}]});

    //debugger;
    axios.get('/journals/' + this.state._journal)
    .then((res) => {
      //debugger;
      //var arr = res.data;
      //debugger;
      // select only name and n_times from each meditation opbject
    // var journals_formatted = _.map(
    // arr, 
    // function(j) {
    //     //debugger;
    //     return { left: j.date, right: j.title };
    // }
    //);
    const {title, text, last_updated, date} = res.data;

      this.setState({
        title, 
        body: text,
        last_updated,
        date
      });
      //debugger;
    })
    .catch((e) => {
      //debugger;
    })
  }

  _submit_change = () => {
      //debugger;
    axios.patch('/journals/' + this.state._journal, {
    title: this.state.title,
    text: this.state.body
  })
  .then(function (response) {
    //debugger;
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  //<Text> Journal entry + {this.props.navigation.state.params._id_sent} </Text>
  //<Text> {this.state.body} </Text>
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
              


            <View style={ globalStyles.total_screen_container }>
      <TitleHeader title={ "Journal Entry: " + this.state.date } fontSize={ 20 } />
      <View style={ globalStyles.container_all_below_title }>
        <View style={ styles.last_updated_con }>
          <Text>
            Last Updated: { this.state.last_updated }
          </Text>
        </View>
        <View style={ styles.text_fields_container }>
          <View style={ styles.text_title_con }>
            <TextInput style={ styles.text_title }
                       onChangeText={ (title) => this.setState( {
                                        title: title
                                      } ) }
                       value={ this.state.title }
                       multiline={ false }
                       placeholder={ "Title" } />
          </View>
          <TextInput style={ styles.text_body }
                     onChangeText={ (text) => this.setState( {
                                      body: text
                                    } ) }
                     value={ this.state.body }
                     multiline={ true }
                     placeholder={ "Journal Entry" } />
        </View>
        <View style={ styles.button_row_con }>
          <Button onPress={ this._submit_change }
                  title={ "Update" }
                  color={ colors.interactive }
                  width={ C.w / 2 }
                  height={ 50 } />
        </View>
      </View>
    </View>   
          );
  }
}

const styles = StyleSheet.create( {

  last_updated_con: {
    //width: C.w, 
    height: 30,
    paddingTop: 5,
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    borderBottomWidth: 1,
    backgroundColor: colors.black_lighter
  },
  button_row_con: {
    width: C.w,
    height: 50,
    flexDirection: 'row',
    //flex: 1,
    justifyContent: 'flex-end',
    //alignItems: 'center',
    //borderBottomWidth:1,
    backgroundColor: colors.black_lighter
  },

  text_fields_container: {
    width: C.w,
    height: TEXT_BODY_H + TEXT_TITLE_H + 20,
    flexDirection: 'column',
    //flex: 1,
    justifyContent: 'space-between',
    //paddingRight: PAD,
    //paddingLeft:PAD,
    //paddingTop: PAD,
    borderBottomWidth: 1,
    backgroundColor: 'red'
  },
  text_title_con: {
    width: C.w,
    height: TEXT_TITLE_H,
    backgroundColor: 'yellow',
    paddingLeft: PAD_LEFT,
    borderColor: 'black',
    borderWidth: 1,
  },
  text_title: {
    height: TEXT_TITLE_H,
    width: C.w / 2,
    backgroundColor: colors.white,
  },
  text_body: {
    height: TEXT_BODY_H,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: colors.white,
  },

} );
