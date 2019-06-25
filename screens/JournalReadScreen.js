import React from 'react';
import { ExpoConfigView } from '@expo/samples';

import { Text } from 'react-native';
import axios from 'axios';
import _ from 'lodash';



export default class JournalReadScree extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  constructor(props) {
    super(props);
    // this.state = { 
    //               //ds_fav_meds: ds.cloneWithRows([])     // pairs of (_id, med_name)
    //               journals_formatted: [] // array of { left: med.name, right: item.duration + " minutes" }
    //                };     
  }

  componentWillMount(){
    //this.setState({fav_meds: [{key: 'a'}, {key: 'zzz'}, {key: 'a'}, {key: 'zzz'}]});

    //debugger;
    // axios.get('/journals')
    // .then((res) => {
    //   //debugger;
    //   var arr = res.data;

    //   // select only name and n_times from each meditation opbject
    // var journals_formatted = _.map(
    // arr, 
    // function(j) {
    //     //debugger;
    //     return { left: j.date, right: j.title };
    // }
    // );

    //   this.setState({journals_formatted: journals_formatted});
    // })
    // .catch((e) => {
    //   //debugger;
    // })
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
            <Text> Journal entry + {this.props.navigation.state.params._id_sent} </Text>      
          );
  }
}
