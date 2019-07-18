/*
    A screen to update/create a journal entry. It has text fields for TITLE and TEXT.
*/
import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

//import Button from 'react-native-button';

import TitleHeader from './TitleHeader.js'
import Button from './Button.js'


import colors from './../../assets/colors/colors.js';
import globalStyles from './../../assets/styles/globalStyles';
import C from './../../assets/constants';


const TEXT_BODY_H = 220;
const TEXT_TITLE_H = 20;
const PAD = 3;
const PAD_LEFT = 3;


class JournalNewEntryOrReadEntry extends React.Component {
  constructor( props ) {
    super( props );
    //debugger;
    this.state = {
      title: "",
      text: "",
      //_journal: this.props._journal,

      //screen_title: this.props.title,

    }
  }

  _handlePress() {
    this.setState( {
      isDisabled: true
    } );
    console.log( 'Now, button disabled' );
  }

  _submit_change() {
        debugger;
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */

    //debugger;

    // <Button
    //    style={{ fontSize: 20, color: 'white' }}
    //    styleDisabled={{ color: 'white' }}
    //    containerStyle={{ padding: 10, height: 45, width: 120, overflow: 'hidden', borderRadius: 4, backgroundColor: 'aqua' }}
    //    disabledContainerStyle={{ backgroundColor: 'pink' }}
    //    onPress={() => this._handlePress()}
    //  >
    //    Press Me!
    //  </Button>

    return (
    <View style={ globalStyles.total_screen_container }>
      <TitleHeader title={ this.props.screen_title } fontSize={ 20 } />
      <View style={ globalStyles.container_all_below_title }>
        <View style={ styles.last_updated_con }>
          <Text>
            Last Updated: + "{ this.props.last_updated }"
          </Text>
        </View>
        <View style={ styles.text_fields_container }>
          <View style={ styles.text_title_con }>
            <TextInput style={ styles.text_title }
                       onChangeText={ (title) => this.setState( {
                                        title
                                      } ) }
                       value={ this.props.title }
                       multiline={ false }
                       placeholder={ "Title" } />
          </View>
          <TextInput style={ styles.text_body }
                     onChangeText={ (text) => this.setState( {
                                      text
                                    } ) }
                     value={ this.props.text }
                     multiline={ true }
                     placeholder={ "Journal Entry" } />
        </View>
        <View style={ styles.button_row_con }>
          <Button onPress={ this._submit_change }
                  title={ "Update" }
                  color={ colors.interactive }
                  width={ C.w / 2 }
                  height={ 50 } />
        </View>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create( {

  last_updated_con: {
    //width: C.w, 
    height: 30,
    paddingTop: 5,
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    borderBottomWidth: 1,
    backgroundColor: colors.black_lighter
  },
  button_row_con: {
    width: C.w,
    height: 50,
    flexDirection: 'row',
    //flex: 1,
    justifyContent: 'flex-end',
    //alignItems: 'center',
    //borderBottomWidth:1,
    backgroundColor: colors.black_lighter
  },

  text_fields_container: {
    width: C.w,
    height: TEXT_BODY_H + TEXT_TITLE_H + 20,
    flexDirection: 'column',
    //flex: 1,
    justifyContent: 'space-between',
    //paddingRight: PAD,
    //paddingLeft:PAD,
    //paddingTop: PAD,
    borderBottomWidth: 1,
    backgroundColor: 'red'
  },
  text_title_con: {
    width: C.w,
    height: TEXT_TITLE_H,
    backgroundColor: 'yellow',
    paddingLeft: PAD_LEFT,
    borderColor: 'black',
    borderWidth: 1,
  },
  text_title: {
    height: TEXT_TITLE_H,
    width: C.w / 2,
    backgroundColor: colors.white,
  },
  text_body: {
    height: TEXT_BODY_H,
    borderColor: 'black',
    borderWidth: 1,
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: colors.white,
  },

} );

export default JournalNewEntryOrReadEntry;
