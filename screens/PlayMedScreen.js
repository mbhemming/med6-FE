/*
  


  TODO:
    -move the axios call to be in the constructor. It only needs to happen once
    -when you click, you should you navigate to the actual meditations?
*/



import React from 'react';
import { View, Dimensions, StyleSheet, FlatList, Text, Modal, Alert, TouchableHighlight} from 'react-native';

import C from './../assets/constants';

export default class PlayMedScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  constructor(props) {
    super(props);
    this.state = { 
                  //ds_fav_meds: ds.cloneWithRows([])     // pairs of (_id, med_name)
                  fav_meds_formatted: [], // array of { left: med.name, right: item.duration + " minutes" }
                   
                   modalVisible: true,
                   };     
  }

  

  componentWillMount(){
    //this.setState({fav_meds: [{key: 'a'}, {key: 'zzz'}, {key: 'a'}, {key: 'zzz'}]});

   
    

    
  }

  

  render() {
      debugger
      return (
            <View style={{flex: 1, backgroundColor: "purple"}}>
        
      </View>      
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
