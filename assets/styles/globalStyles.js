import { Dimensions, StyleSheet } from 'react-native';

import colors from './../colors/colors'
import C from './../constants'

const dims = Dimensions.get("window");

const globalStyles = StyleSheet.create({
  total_screen_container: {
    width: dims.width, 
    height: dims.height-C.tab_bar_height,   // -112 for the tab bar at the bottom
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    borderBottomWidth:1,
    backgroundColor: colors.black 
  },
  container_all_below_title: {
    width: dims.width, 
    height: dims.height - C.tab_bar_height - C.title_and_brand_image_height, 
    //flexDirection: 'column', 
    //flex: 1,
    //justifyContent: 'space-around',
    borderBottomWidth:1,
    backgroundColor: colors.black_lighter,
    
  },

  
  
});
export default globalStyles;