import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Text, View, StyleSheet, Dimensions, ScrollView, ListView } from 'react-native';

import axios from 'axios';

import TitleHeader from './../components/shared/TitleHeader.js' 
import ListItemMedLogEntry from './../components/med-log-screen/ListItemMedLogEntry.js'

const dims = Dimensions.get("window");

const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });


export default class MedLogScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  constructor(props) {
    super(props);
    this.state = { 
                  ds_complete_meds: ds.cloneWithRows([{name: "MUST SET STATE ", n_times: 3}, {name: "med2 ", n_times: 5}])     // pairs of (med_name, n_times completed)
                   };     
  }

  componentWillMount(){
    axios.get('/med_logs')
  .then(function (res) {
    // handle success
    ///////////////////////////////ADD IN HERE
    //debugger;
    console.log(res);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
  }

  _renderRow(med_row){
      return(
        <ListItemMedLogEntry name = {med_row.name} n_times_completed = {med_row.n_times} />
        
      );
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
    	<View style = {styles.container}>
    		<TitleHeader title = {'Completed Meditations'} 
    		fontSize = {20}
    		/>
        <Text> after I made GET med_logs retur (name, n_times), must set state </Text>
        <ScrollView style={styles.questions_scrollable_container}>
                        <ListView
                        dataSource={this.state.ds_complete_meds}
                        renderRow={rowData => this._renderRow(rowData) }
                        />
        </ScrollView>

    	</View>
    	);
  }
}


const styles = StyleSheet.create({
  container: {
    width: dims.width, 
    height: dims.height, 
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    borderBottomWidth:1
  },
  
});
