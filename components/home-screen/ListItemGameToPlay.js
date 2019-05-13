
import React from 'react';
import { Text, View, Image, Dimensions, StyleSheet, Button } from 'react-native';

import BlinkView from 'react-native-blink-view';


const dims = Dimensions.get("window");

const row_height= 90;
const WIDTH_BUFFER=5
const number_chamber_width = dims.width/5-WIDTH_BUFFER;
const image_chamber_width = dims.width*(3/5)-WIDTH_BUFFER;
const status_chamber_width = dims.width/5-WIDTH_BUFFER;

class ListItemGameToPlay extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            game_complete: false
        }
    }

    componentWillMount(){
        this.setState({
       game_complete: this.props.game_complete
     });
    }



    renderGameStatus = function(){

    if(this.state.game_complete) {
        return (
            <View style={{ width: status_chamber_width, height: row_height, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                style={{width: row_height/2, height: row_height/2, borderRadius: 5}}
                source={require("../../assets/images/check.png")}
                />
            </View>
        )
    }
    else{
        return(
            <View style={{ width: status_chamber_width, height: row_height}}>
                <BlinkView blinking={true} delay={700}>
                    <Button title='Play Now!' color='green' onPress={()=>{}} />
                </BlinkView>
            </View>
        )
    }


    };



    render() {


        return(
            <View style={{ width: dims.width, height: row_height, flexDirection: "row"}}>
                <View style={{ width: number_chamber_width, height: row_height}}>
                    <Text style={{fontSize: 40}} >{this.props.game_num}</Text>
                </View>

                <View style={{ width: image_chamber_width, height: row_height}}>
                    <Image
                    style={{width: row_height, height: row_height, borderRadius: 4}}
                    source={{uri: this.props.image1}}
                    />
                </View>


                {this.renderGameStatus()}





            </View>
        );
    }
}

const styles = StyleSheet.create({
  playNowText: {
    fontSize: 30,
    backgroundColor: "#fff"
  },

});


export default ListItemGameToPlay;
