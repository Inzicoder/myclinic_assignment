/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,

  StyleSheet,



} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';


function App() {
  return (
    <SafeAreaView style={styles.container}>
    
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    background: '#FFF',
    height: '100%',
} ,
});

export default App;
