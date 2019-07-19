import { StyleSheet, Dimensions } from 'react-native';

import C from './../constants';



const styles = StyleSheet.create({
  
  container: {
    width: C.w, 
    height: C.h, 
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    borderBottomWidth:1,
    backgroundColor: colors.black 
  },
  
  questions_scrollable_container: {
    width: C.w, 
    height: C.h * (2/3), 
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    borderBottomWidth:1,
    backgroundColor: colors.black_lighter 
  },
  
});

export default styles;