import React from 'react';

//import BrandHeader from './../components/shared/BrandHeader.js' 
import TitleHeader from './../components/shared/TitleHeader.js' 

import { Text } from 'react-native';

export default class FavMedScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  render() {

      return (
            
            <TitleHeader title = 'NEW TITLE'/>
          );


  }
}
