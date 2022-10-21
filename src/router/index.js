import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../pages/Authentication/Screens/Signin';
import Signup from '../pages/Authentication/Screens/Signup';
import Home from '../pages/Home';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {InitializeFirebase} from '../controller/firebase';
import {storeData} from '../utils/asyncStorage';
import appleAuth from '@invertase/react-native-apple-authentication';

const Stack = createStackNavigator();

const Router = () => {
  const navigation = useNavigation();

  // Listening on auth state
  useEffect(() => {
    auth().onAuthStateChanged(userState => {
      if (userState) {
        storeData('userAuthState', userState);
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      }

      if (!userState) {
        storeData('userAuthState', '');
        navigation.reset({
          index: 0,
          routes: [{name: 'Signin'}],
        });
      }
    });
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    // initialRouteName={!user ? 'Signin' : 'Home'}>
  );
};

export default Router;
