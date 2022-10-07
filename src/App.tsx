import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
    // <View>
    //   <Text>App</Text>
    // </View>
  );
};

export default App;

const styles = StyleSheet.create({});
