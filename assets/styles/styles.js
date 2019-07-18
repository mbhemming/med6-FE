import { StyleSheet, Dimensions } from 'react-native';

const dims = Dimensions.get("window");


const styles = StyleSheet.create({
  container: {
    width: dims.width, 
    height: dims.height, 
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    borderBottomWidth:1,
    backgroundColor: colors.black 
  },
  
  questions_scrollable_container: {
    width: dims.width, 
    height: dims.height * (2/3), 
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    borderBottomWidth:1,
    backgroundColor: colors.black_lighter 
  },
  
});

export default styles;