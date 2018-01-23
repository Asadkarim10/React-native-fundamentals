import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import images from './images.jpg';
import images1 from './images1.jpg';
import images2 from './images2.jpg';
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
         <Image style={styles.pic} source={images} />
         <Image  style={styles.pic} source={images1} />
         <Image  style={styles.pic}   source={images2} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  pic:{
    borderRadius: 50,
    flex: 1,
    resizeMode:'cover'
  }
});
