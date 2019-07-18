/*
  TODO:
    -move the axios call to be in the constructor. It only needs to happen once
    -when you click, you should you navigate to the actual meditations?
*/

import React from 'react';
import { View, Dimensions, StyleSheet, FlatList, Text} from 'react-native';
const axios = require('axios');

import _ from 'lodash';

//import BrandHeader from './../components/shared/BrandHeader.js' 
import TitleHeader from './../components/shared/TitleHeader.js' 
//import ListItemTextLeftAndRight from './../components/shared/ListItemTextLeftAndRight.js'

import ListScreen from './../components/shared/ListScreen.js'

import C from './../assets/constants';


//const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });

export default class FavMedScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  constructor(props) {
    super(props);
    this.state = { 
                  //ds_fav_meds: ds.cloneWithRows([])     // pairs of (_id, med_name)
                  fav_meds_formatted: [] // array of { left: med.name, right: item.duration + " minutes" }
                   };     
  }

  componentWillMount(){
    //this.setState({fav_meds: [{key: 'a'}, {key: 'zzz'}, {key: 'a'}, {key: 'zzz'}]});

    //debugger;
    axios.get('/users/me_fav_meds')
    .then((res) => {
      //debugger;
      var arr = res.data;

      // select only name and n_times from each meditation opbject
    var fav_meds_formatted = _.map(
    arr, 
    function(med) {
        //debugger;
        return { left: med.name, right: med.duration + " minutes" };
    }
    );

      this.setState({fav_meds_formatted: fav_meds_formatted});
      //debugger;
    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
    })
    .catch((e) => {
      //debugger;
    })
  }

  // <ListView
  //                       dataSource={this.state.ds_fav_meds}
  //                       renderRow={rowData => this._renderRow(rowData) }
  //  />
  //    

  // fav_med_row has 2 props (_id [for med id], name [mediation name])
  // _renderRow(fav_med_row){
  //   debugger;
  //     if(fav_med_row){
  //       return(
  //       <Text>  {fav_med_row.name} </Text>
          
  //       );
  //     }
  //     else {
  //       return(<Text> NO ROW DATA FOUND </Text>);
  //     }
      
  // }
                     

  render() {
      debugger
      return (
            <ListScreen 
              list_data = {this.state.fav_meds_formatted} 
              title = {"Favorite Meditations"}
              />       
          );


  }
}


const styles = StyleSheet.create({
  container: {
    width: C.w, 
    height: C.h, 
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    borderBottomWidth:1
  },
  
});
