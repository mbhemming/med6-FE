import { Dimensions, StyleSheet } from 'react-native';

import colors from './../colors/colors'
import C from './../constants'

const dims = Dimensions.get("window");

const globalStyles = StyleSheet.create({
  safe_area: {
        flex: 1,
        backgroundColor: 'red'
    },
  total_screen_container: {
    width: C.w, 
    height: C.h - C.tab_bar_height,   // -112/2 for the tab bar at the bottom
    //flexDirection: 'column', 
    flex: 1,
    justifyContent: 'flex-end',
    borderBottomWidth:1,
    backgroundColor: colors.black ,
    //paddingBottom: C.tab_bar_height
  },
  container_all_below_title: {
    width: C.w, 
    height: C.h - C.tab_bar_height - C.title_and_brand_image_height, 
    //flexDirection: 'column', 
    flex: 1,
    //justifyContent: 'space-around',
    borderBottomWidth:1,
    backgroundColor: colors.black_lighter,
    
  },

  
  
});
export default globalStyles;