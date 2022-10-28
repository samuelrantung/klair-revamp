import {SafeAreaView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Router from './router';
import {theme} from './assets/designSystem';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {Provider} from 'react-redux';
import {store} from './redux';
import Modal from './components/molecules/Modal';

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '615214109443-5kf48v68394h6qdr2bsoj2cih8e0ijv5.apps.googleusercontent.com',
    });
  }, []);

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Router />
        <Modal />
      </SafeAreaView>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});
