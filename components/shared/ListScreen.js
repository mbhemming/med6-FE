/*
    Renders an entire screen that have a brand logo and title at the top. 
    Then in the middle it has a listview

    two options:
    a) render a list of non-clickable buttons
    b) render a list of clicklable. It will navigate to a new screen with the id of an object to get

    props in:
    -list_data: [left,right,_id_item]: The list of data containing left string and right string
        - If you are rendering this with option-b, then there will be a third 
            element (left,right, _id_item). When you navigate to a new screen, 
            there can now be an id so the next screen can fetch an object
    nav_screen_name:if option-b, then there is another prop called 'nav_screen_name'
*/
import React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView, FlatList } from 'react-native';

import TitleHeader from './TitleHeader.js';
import ListItemTextLeftAndRight from './ListScreen/ListItemTextLeftAndRight.js';


import colors from './../../assets/colors/colors.js';
import globalStyles from './../../assets/styles/globalStyles';


const row_height = 40;

class ListScreen extends React.Component {
  constructor( props ) {
    super( props );
    this.state = {

    }
  }


  // <View style={{ width: number_chamber_width, height: row_height}}>

  //             </View>

  //             <View style={{ width: image_chamber_width, height: row_height}}>

  //             </View>


  // nav = {this.props.navigation}

  _renderRow = ({item}) => {
    //debugger;
    const screen_nav_to = this.props.nav_screen_name;

    if ( screen_nav_to ) {
      return (
      <ListItemTextLeftAndRight left={ item.left }
                                right={ item.right }
                                _id_list_item={ item._id_item }
                                nav_screen_name={ screen_nav_to } />
      );
    } else {
      return (
      <ListItemTextLeftAndRight left={ item.left } right={ item.right } />
      );
    }


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

    <View style={ globalStyles.total_screen_container }>
      <TitleHeader title={ this.props.title } fontSize={ 20 } />
      <View style={ globalStyles.container_all_below_title }>
        <ScrollView>
          <FlatList data={ this.props.list_data } renderItem={ this._renderRow } />
        </ScrollView>
      </View>
    </View>


    );
  }
}

const styles = StyleSheet.create( {



} );

export default ListScreen;
