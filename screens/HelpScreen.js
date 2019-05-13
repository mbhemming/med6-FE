import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class HelpScreen extends React.Component {
  static navigationOptions = {
    title: '',
  };



  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerTitleLogo}>
            <Text style={styles.title}> How to play</Text>
            <Image
              style={{ width: 100, height: 100 }}
              source={require("../assets/images/sherlock-logo.jpg")}
            />
        </View>


        <Text style={styles.title}></Text>

        <Text style={styles.header_sherlock_quote}> “To a great mind, nothing is insignificant”</Text>
        <Text style={styles.header_sherlock_quote}>     - Sherlock Holmes</Text>

        <Text style={styles.header_sherlock_quote}></Text>

        <Text style={styles.instructions}>-You are presented with a few photos of a scene</Text>
        <Text style={styles.instructions}></Text>
        <Text style={styles.instructions}>-Observe, infer, and deduce</Text>
        <Text style={styles.instructions}></Text>
        <Text style={styles.instructions}>-Your answers should be the most likely inference based on the images alone. If you are farmillar with these scencs, then set all piror knowlege aside</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#fff',
  },
  containerTitleLogo: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft:10,
    paddingRight:10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize:35
  },
  header_sherlock_quote: {
    fontSize:20
  },
  instructions: {
    fontSize:15,
    color: "blue"
  },
});
