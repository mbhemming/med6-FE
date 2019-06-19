
import React from 'react';
import { Text, View, Image, Dimensions, StyleSheet, Button } from 'react-native';

//import BlinkView from 'react-native-blink-view';


const dims = Dimensions.get("window");

const row_height= 40;

class ListItemMedLogEntry extends React.Component {
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
                <Text style={{fontSize: 18}} >{this.props.name}</Text>
                <Text style={{fontSize: 14}} >Completed {this.props.n_times_completed} times</Text>

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


export default ListItemMedLogEntry;
