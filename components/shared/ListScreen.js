/*
    Renders an entire screen that have a brand logo and title at the top. 
    Then in the middle it has a listview

    props in:
    -list_data      The list of data containing left string and right string
*/
import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';

import TitleHeader from './TitleHeader.js' 
import ListItemTextLeftAndRight from './ListItemTextLeftAndRight.js'

import colors from './../../assets/colors/colors.js'

//import BlinkView from 'react-native-blink-view';


const dims = Dimensions.get("window");

const row_height= 40;

class ListScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }


    // <View style={{ width: number_chamber_width, height: row_height}}>

    //             </View>

    //             <View style={{ width: image_chamber_width, height: row_height}}>
                    
    //             </View>



    _renderRow({item}){
    debugger;
    return(
            <ListItemTextLeftAndRight left = {item.left} right = {item.right} />
        );
    
    // if( item.n_times > 0 ){
    //   return(
    //     <ListItemTextLeftAndRight left = {item.left} right = {item.right} />
          
    //     ); 
    // }
    // else{
    //   // If the med was never completed, don't render anything
    //   return(
    //     <View>NOTHING RENDERED</View>
    //     );
    // }
           
  }


  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */

     //debugger;

    return (
        <View style = {styles.container}>
            <TitleHeader title = {this.props.title} 
            fontSize = {20}
            />
        <ScrollView style={styles.questions_scrollable_container}>
                        
                        <FlatList
              data={this.props.list_data}
              renderItem={this._renderRow}
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

export default ListScreen;
