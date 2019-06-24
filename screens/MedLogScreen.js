import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Text, View, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';

import axios from 'axios';

import TitleHeader from './../components/shared/TitleHeader.js' 
import ListItemTextLeftAndRight from './../components/shared/ListItemTextLeftAndRight.js'

import colors from './../assets/colors/colors.js'

const dims = Dimensions.get("window");


export default class MedLogScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  constructor(props) {
    super(props);
    this.state = { 
                  fav_meds: []     // pairs of (med_name, n_times completed)
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
    // handle success
    this.setState({fav_meds: arr })
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

  _renderRow({item}){
    debugger;
    if( item.n_times > 0 ){
      return(
        <ListItemTextLeftAndRight left = {item._med.name} right = {"Completed " + item.n_times + " times"} />
          
        ); 
    }
    else{
      // If the med was never completed, don't render anything
      return(
        <View></View>
        );
    }
           
  }


  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
    	<View style = {styles.container}>
    		<TitleHeader title = {'Completed Meditations'} 
    		fontSize = {20}
    		/>
        <ScrollView style={styles.questions_scrollable_container}>
                        
                        <FlatList
              data={this.state.fav_meds}
              renderItem={this._renderRow     }
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
    borderBottomWidth:1,
    backgroundColor: colors.black 
  },
  questions_scrollable_container: {
    width: dims.width, 
    height: dims.height * (2/3), 
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    borderBottomWidth:1,
    backgroundColor: colors.black_lighter 
  },
  
});
