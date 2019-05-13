import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {

      if(this.props.package === 'ionicons'){
          return (
            <Icon.Ionicons
              name={this.props.name}
              size={26}
              style={{ marginBottom: -3 }}
              color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          );
      }
      else if(this.props.package === 'materialicons'){
          return (
            <Icon.MaterialIcons
              name={this.props.name}
              size={26}
              style={{ marginBottom: -3 }}
              color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            />
          );
      }


  }
}
