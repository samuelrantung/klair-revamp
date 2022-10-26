import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Router from './router';
import {theme} from './assets/designSystem';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '615214109443-5kf48v68394h6qdr2bsoj2cih8e0ijv5.apps.googleusercontent.com',
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Router />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
