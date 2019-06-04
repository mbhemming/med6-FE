import React from 'react';
import { View, Dimensions, StyleSheet} from 'react-native';
const axios = require('axios');

//import BrandHeader from './../components/shared/BrandHeader.js' 
import TitleHeader from './../components/shared/TitleHeader.js' 

import { Text } from 'react-native';

const dims = Dimensions.get("window");

export default class FavMedScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  componentWillMount(){
    
    axios.get('/meds')
    .then(function (response) {
      debugger;
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    });
  }

  render() {

      return (
            <View style = {styles.container}>
            	<TitleHeader title = 'Favorite Meditations NEED TO MAKE A ROUTE LATER TO HAVE THIS WORK. USES user MODEL'/>
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
