import React, { Component, createContext } from "react";

import {
 ListView
} from "react-native";

// Provider and Consumer are connected through their "parent" context
const { Provider, Consumer } = createContext();

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

let game_array = [
    {
        game_num:1,
        image1:"https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2018/11/dolph-lundgren-drago-creed-2.jpg?itok=5XBjrOvl",
        game_complete: true,
        questions:[
            {
                num: 1,
                type: "true_false",
                text: "this is question 1",
                complete: false,
            },
            {
                num: 2,
                type: "true_false",
                text: "this is question 2",
                complete: true,
            },
            {
                num: 3,
                type: "multiple_choice",
                text: "this is question 3",
                options:[
                    "option1",
                    "option2",
                    "option3",
                    "option4"
                ],
                complete: false,
            },
            {
                num: 4,
                type: "multiple_choice",
                text: "this is question 4",
                options:[
                    "option1",
                    "option2",
                    "option3",
                    "option4"
                ],
                complete: false,
            },

        ]
    },
    {
        game_num:2,
        image1:"https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2018/11/creed_ii_still_2.jpg",
        game_complete:false
    }
]

let game_array2 = [
    {
        game_num:99,
        image1:"https://cdn1us.denofgeek.com/sites/denofgeekus/files/styles/main_wide/public/2018/11/dolph-lundgren-drago-creed-2.jpg?itok=5XBjrOvl",
        game_complete: true,
        questions:[
            {
                num: 1,
                type: "true_false",
                text: "this is question 1",
                complete: true,
            },
            {
                num: 2,
                type: "true_false",
                text: "this is question 2",
                complete: true,
            },
            {
                num: 3,
                type: "multiple_choice",
                text: "this is question 3",
                options:[
                    "option1",
                    "option2",
                    "option3",
                    "option4"
                ],
                complete: false,
            },
            {
                num: 4,
                type: "multiple_choice",
                text: "this is question 4",
                options:[
                    "option1",
                    "option2",
                    "option3",
                    "option4"
                ],
                complete: false,
            },

        ]
    },
    {
        game_num:2,
        image1:"https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2018/11/creed_ii_still_2.jpg",
        game_complete:false
    }
]

const update = () => {
    debugger;
     this.setState({ userLoggedIn: true });
     debugger;
  }

// Provider will be exported wrapped in ConfigProvider component.
class ConfigProvider extends Component {
  state = {
    userLoggedIn: false,                            // Mock login
    profile: {                                      // Mock user data
      username: "Morgan",
      image: "https://morganfillman.space/200/200",
      bio: "I'm Mogran—so... yeah2."
    },
    array: game_array,  /////**********8 DELETE LATER
    dataSource: ds.cloneWithRows(game_array),

  };


  //update = ()  => this.setState({ userLoggedIn: true });



  // updateValue = (key, val) => {
  //      this.setState({[key]: val});
  //   }

  render() {
    return (
      <Provider
        value={{
          userLoggedIn: this.state.userLoggedIn,
          profile: this.state.profile,
          toggleLogin: this.state.toggleLogin,
          dataSource: this.state.dataSource,
          toggleQuestion: this.state.toggleQuestion,
          array: this.state.array,

          update: () => {
              debugger;
               this.setState({dataSource: ds.cloneWithRows(game_array2)});
               //this.setState({ array:game_array2 });
               //debugger;
            }
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ConfigProvider };

// I make this default since it will probably be exported most often.
export default Consumer;
