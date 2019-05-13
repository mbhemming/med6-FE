
import React from 'react';
import { Text, View, Image, Dimensions, StyleSheet, Button } from 'react-native';

import Consumer from "./../../utils/configContext";

const dims = Dimensions.get("window");

const row_height= 90;
const WIDTH_BUFFER=5
const number_chamber_width = dims.width/5-WIDTH_BUFFER;
const image_chamber_width = dims.width*(3/5)-WIDTH_BUFFER;
const status_chamber_width = dims.width/5-WIDTH_BUFFER;

const QUESTION_SECTION_HEIGHT=20

const HEIGHT_OF_true_false_SECTION=30;
const HEIGHT_OF_multiple_choice_SECTION=30*5;
const HEIGHT_OF_long_answer_SECTION=200;

class ListItemQuestion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            type: "",   //   3 types: ture_false, multiple_choice, long_answer
            answer_section_height: 25,    //    a true_false quesiton may have a different height hten a multiple_choice
        }
    }

    submit_answred_question = () => {
      this.props.submit_answred_question();
  }

    componentWillMount(){
        //

        const hold_type = this.props.type;
        const hold_answer_section_heigh=99;

        if (hold_type === "true_false"){
            hold_answer_section_height=HEIGHT_OF_true_false_SECTION;
        }
        else if (hold_type === "multiple_choice"){
            hold_answer_section_height=HEIGHT_OF_multiple_choice_SECTION;
        }
        else if (hold_type === "long_answer"){
            hold_answer_section_height=HEIGHT_OF_long_answer_SECTION;
        }

        this.setState({
            type: hold_type,
            answer_section_height: hold_answer_section_height
        });


    }

    //  handles multiple choice answer submissions
    m_c_answer_handler(a_b_c_or_d, ctx, n_game, n_question){
        console.log(n_game)
        console.log(n_question)

    };

    ///////$$$$$$$$$$$      AFTER PLAYING A QUESTION, USE CONTEXT API TO WRITE IN THE AWNSWER

    renderAnswerSection = function(ctx){
        const hold_type = this.props.type;



        // If a question is complete, then make it disapear
        if (this.props.complete === true){
            return(
                <View>
                    <Text> Complete </Text>
                </View>
            )
        }
        else if (this.props.complete === false){
            if (hold_type === "true_false"){
                //debugger;
                return(
                    <View style={{ width: dims.width, height: HEIGHT_OF_true_false_SECTION, flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                            <Button title='True!' color='red' onPress={()=>{this.submit_answred_question();}} />
                            <Button title='False' color='green' onPress={()=>{}} />
                            <Text> D {ctx.array[0].game_num}</Text>
                    </View>
                )

            }
            else if (hold_type === "multiple_choice"){
                hold_answer_section_height=HEIGHT_OF_multiple_choice_SECTION;
                //debugger;
                return(
                    <View style={{ width: dims.width, height: HEIGHT_OF_multiple_choice_SECTION, flexDirection: "column",justifyContent: 'flex-start', alignItems: 'flex-start'}}>
                            <Button title={this.props.options[0]} color='red' onPress={()=>{this.m_c_answer_handler("a",ctx)}} />
                            <Button title={this.props.options[1]} color='red' onPress={()=>{this.m_c_answer_handler("b",ctx)}} />
                            <Button title={this.props.options[2]} color='red' onPress={()=>{}} />
                            <Button title={this.props.options[3]} color='red' onPress={()=>{}} />
                    </View>
                )
            }
            else if (hold_type === "long_answer"){
                hold_answer_section_height=HEIGHT_OF_long_answer_SECTION;
            }

        }
        else{
            throw new Error('This shouldnt execute');
        }


    // if(this.state.game_complete) {
    //     return (
    //         <View style={{ width: status_chamber_width, height: row_height, justifyContent: 'center', alignItems: 'center'}}>
    //             <Image
    //             style={{width: row_height/2, height: row_height/2, borderRadius: 5}}
    //             source={require("../../assets/images/check.png")}
    //             />
    //         </View>
    //     )
    // }
    // else{
    //     return(
    //         <View style={{ width: status_chamber_width, height: row_height}}>
    //                 <Button title='Play Now!' color='green' onPress={()=>{}} />
    //         </View>
    //     )
    // }


    };



    render() {


        return(
            <Consumer>
              {ctx => {

                  if (this.props.complete === true){
                      return(
                          <View>
                              <Text> Complete </Text>
                          </View>
                      )
                  }
                  else {
                      return (
                          <View style={{ width:   dims.width,
                                                  height: QUESTION_SECTION_HEIGHT + this.state.answer_section_height,
                                                  flexDirection: "column",
                                                  borderRadius:3,
                                                  borderWidth: 1}}>
                              <View style={{ width: dims.width, height: QUESTION_SECTION_HEIGHT}}>
                                  <Text style={{fontSize: 17}} > {this.props.question_num}</Text>
                              </View>

                              {this.renderAnswerSection(ctx)}


                          </View>

                      );
                  }


              }}
            </Consumer>


        );
    }
}

const styles = StyleSheet.create({
  row_style: {
    fontSize: 30,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10
  },



});


export default ListItemQuestion;
