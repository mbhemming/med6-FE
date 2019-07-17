/*
    Renders some text to the left and other text to the right. Used for ListViews
    -If the item is used to navigate, it will have an id and screen name to move
*/
import React from 'react';
import { Text, 
    View, 
    Image, 
    Dimensions, 
    StyleSheet, 
    Button, 
    TouchableHighlight } from 'react-native';

import { withNavigation } from 'react-navigation';

import colors from './../../../assets/colors/colors.js'

//import BlinkView from 'react-native-blink-view';


const dims = Dimensions.get("window");

const row_height= 40;

class ListItemTextLeftAndRight extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }


    // <View style={{ width: number_chamber_width, height: row_height}}>

    //             </View>

    //             <View style={{ width: image_chamber_width, height: row_height}}>
                    
    //             </View>



    render() {
        //debugger;
        const {navigate} = this.props.navigation
        //debugger;
        const nav_to = this.props.nav_screen_name

        // if we have a screen to nav to, then it's a button. If not, just render the text
        if(nav_to){
            //debugger;
            return(
            <TouchableHighlight 
                style={styles.container} 
                onPress={ () => {
                    navigate(this.props.nav_screen_name, {_id_sent: this.props._id_list_item});
                        }
                }
                underlayColor = {colors.interactive}
                >
            <View style={styles.spatial}>
                <Text style={{fontSize: 18, color: colors.interactive}} >{this.props.left}</Text>
                <Text style={{fontSize: 14, color: colors.interactive_plus}} >{this.props.right}</Text>

            </View>
            </TouchableHighlight>
        );
        }
        else {
            return(
            
            <View style={styles.container}>
                <Text style={{fontSize: 18, color: colors.black}} >{this.props.left}</Text>
                <Text style={{fontSize: 14, color: colors.black_lighter}} >{this.props.right}</Text>

            </View>
            
        );
        }
        
    }
}

const styles = StyleSheet.create({
  playNowText: {
    fontSize: 30,
    backgroundColor: "#fff"
  },
  spatial: { 
    width: dims.width, 
    height: row_height, 
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // paddingRight: 5,
    // paddingLeft: 5,
    // borderRadius:3,
    // borderWidth: 1,
    //borderColor: colors.white_darker,
    //backgroundColor: colors.white
},
    container: {
    width: dims.width, 
    height: row_height, 
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 5,
    paddingLeft: 5,
    borderRadius:3,
    borderWidth: 1,
    borderColor: colors.white_darker,
    backgroundColor: colors.white,

  },

});


export default withNavigation(ListItemTextLeftAndRight);
