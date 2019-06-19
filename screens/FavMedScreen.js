import React from 'react';
import { View, Dimensions, StyleSheet, FlatList} from 'react-native';
const axios = require('axios');

//import BrandHeader from './../components/shared/BrandHeader.js' 
import TitleHeader from './../components/shared/TitleHeader.js' 

import { Text } from 'react-native';

//const ds = new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 });

const dims = Dimensions.get("window");

export default class FavMedScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  constructor(props) {
    super(props);
    this.state = { 
                  //ds_fav_meds: ds.cloneWithRows([])     // pairs of (_id, med_name)
                  fav_meds: []
                   };     
  }

  componentWillMount(){
    //this.setState({fav_meds: [{key: 'a'}, {key: 'zzz'}, {key: 'a'}, {key: 'zzz'}]});

    //debugger;
    axios.get('/users/me_fav_meds')
    .then((res) => {
      //debugger;
      this.setState({fav_meds: res.data});

    // console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
    })
    .catch((e) => {
      //debugger;
    })
  }

  // <ListView
  //                       dataSource={this.state.ds_fav_meds}
  //                       renderRow={rowData => this._renderRow(rowData) }
  //  />
  //    

  // fav_med_row has 2 props (_id [for med id], name [mediation name])
  // _renderRow(fav_med_row){
  //   debugger;
  //     if(fav_med_row){
  //       return(
  //       <Text>  {fav_med_row.name} </Text>
          
  //       );
  //     }
  //     else {
  //       return(<Text> NO ROW DATA FOUND </Text>);
  //     }
      
  // }
                     

  render() {

      return (
            <View style = {styles.container}>
            	<TitleHeader 
                title = {'Favorite Meditations NEED TO MAKE A ROUTE LATER TO HAVE THIS WORK. USES user MODEL'}
                fontSize = {18}
                />

            
            <FlatList
              data={this.state.fav_meds}
              renderItem={({item}) => <Text>{item.name}</Text>}
            />
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
    borderBottomWidth:1
  },
  
});
