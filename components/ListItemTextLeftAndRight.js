/*
    Renders some text to the left and other text to the right. Used for ListViews
*/
import React from 'react';
import { Text, View, Image, Dimensions, StyleSheet, Button } from 'react-native';

//import BlinkView from 'react-native-blink-view';


const dims = Dimensions.get("window");

const row_height= 40;

class ListItemTextLeftAndRight extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            game_complete: false   /// remove later
        }
    }


    // <View style={{ width: number_chamber_width, height: row_height}}>

    //             </View>

    //             <View style={{ width: image_chamber_width, height: row_height}}>
                    
    //             </View>



    render() {


        return(
            <View style={styles.container}>
                <Text style={{fontSize: 18}} >{this.props.left}</Text>
                <Text style={{fontSize: 14}} >{this.props.right}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
  playNowText: {
    fontSize: 30,
    backgroundColor: "#fff"
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
    borderWidth: 1
},

});


export default ListItemTextLeftAndRight;
