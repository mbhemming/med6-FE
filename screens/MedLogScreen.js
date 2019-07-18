import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Text, View, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';

import axios from 'axios';
import _ from 'lodash';

import ListScreen from './../components/shared/ListScreen.js'


const dims = Dimensions.get("window");


export default class MedLogScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  constructor(props) {
    super(props);
    this.state = { 
                  meds_logged_formatted: [] // array of {left: med_name, right: "Completed " + med.n_times + " times"}
                   };     
  }

  componentWillMount(){
    //debugger;
    axios.get('/med_logs')
  .then( (res) => {
    
    //for each meditation completed, compute a new property
    var arr = res.data;
  
    // from the dates completed, compute the number of times the mediation was completed
    arr.forEach(function(med, index, theArr) {
      //debugger;
      theArr[index].n_times = med.dates_comp.length;
    });

    // select only name and n_times from each meditation opbject
    var meds_logged_formatted = _.map(
    arr, 
    function(med) {
        return { left: med._med.name, right: "Completed " + med.n_times + " times" };
    }
    );

    this.setState({meds_logged_formatted: meds_logged_formatted })
  
    //debugger;
    console.log(res);
  })
  .catch(function (error) {
    // handle error
    //debugger;
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
     //debugger;
    return (
    	<ListScreen 
        list_data = {this.state.meds_logged_formatted} 
        title = {"History"}
        />
    	);
  }
}


