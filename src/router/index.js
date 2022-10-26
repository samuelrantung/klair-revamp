import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../pages/Authentication/Screens/Signin';
import Signup from '../pages/Authentication/Screens/Signup';
import Home from '../pages/Home';
import auth from '@react-native-firebase/auth';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {InitializeFirebase} from '../controller/firebase';
import {storeData} from '../utils/asyncStorage';
import appleAuth from '@invertase/react-native-apple-authentication';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Debt from '../pages/Debt';
import Report from '../pages/Report';
import Profile from '../pages/Profile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStackScreen = () => {
  // const navigation = useNavigation();

  // // Listening on auth state
  // useEffect(() => {
  //   auth().onAuthStateChanged(userState => {
  //     if (userState) {
  //       storeData('userAuthState', userState);
  //       navigation.reset({
  //         index: 0,
  //         routes: [{name: 'HomeStackScreen'}],
  //       });
  //     }

  //     if (!userState) {
  //       storeData('userAuthState', '');
  //       navigation.reset({
  //         index: 0,
  //         routes: [{name: 'Signin'}],
  //       });
  //     }
  //   });
  // }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Signin" component={Signin} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

const HomeStackScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Debt"
        component={Debt}
        screenOptions={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        screenOptions={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        screenOptions={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  const [userState, setUserState] = useState(null);

  // Listening on auth state
  auth().onAuthStateChanged(res => {
    if (res) {
      storeData('userAuthState', userState);
      setUserState(res);
      console.log('hehe', userState);
    }

    if (!res) {
      storeData('userAuthState', '');
      setUserState(null);
    }
  });

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthStackScreen"
        screenOptions={{
          headerShown: false,
        }}>
        {userState === null ? (
          <Stack.Screen name="AuthStackScreen" component={AuthStackScreen} />
        ) : (
          <>
            <Stack.Screen name="HomeStackScreen" component={HomeStackScreen} />
            <Stack.Screen name="Profile" component={Profile} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
