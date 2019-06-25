import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import { Text } from 'react-native';
import axios from 'axios';
import _ from 'lodash';

import ListScreen from './../components/shared/ListScreen.js'

export default class JournalScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  constructor(props) {
    super(props);
    this.state = { 
                  //ds_fav_meds: ds.cloneWithRows([])     // pairs of (_id, med_name)
                  journals_formatted: [] // array of { left: med.name, right: item.duration + " minutes" }
                   };     
  }

  componentWillMount(){
    //this.setState({fav_meds: [{key: 'a'}, {key: 'zzz'}, {key: 'a'}, {key: 'zzz'}]});

    //debugger;
    axios.get('/journals')
    .then((res) => {
      //debugger;
      var arr = res.data;

      // select only name and n_times from each meditation opbject
    var journals_formatted = _.map(
    arr, 
    function(j) {
        //debugger;
        return { left: j.date, right: j.title, _id_item: j._id };
    }
    );
      //debugger;
      this.setState({journals_formatted: journals_formatted});
      //debugger;
    })
    .catch((e) => {
      //debugger;
    })
    .finally(()=>{
      //debugger;
    })
  }
  //nav = {this.props.navigation.navigate}
  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
     //debugger;
    return (
            <ListScreen 
              list_data = {this.state.journals_formatted} 
              title = {"Journal"}
              nav_screen_name = {'JournalRead'}
              
              />       
          );
  }
}
