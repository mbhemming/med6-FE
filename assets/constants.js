import { Dimensions } from 'react-native';

const C = {
  title_and_brand_image_height: 180, //primary brand color


  ////////	NOT TUNABLE //////
  w: Dimensions.get( 'window' ).width,
  h: Dimensions.get( 'window' ).height,

  tab_bar_height: 112/2,

  //
  paths:{
  	screens_to_components: './../components/'
  }

}

export default C;
