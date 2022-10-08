import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Signin from '../pages/Authentication/Screens/Signin';
import Signup from '../pages/Authentication/Screens/Signup';

const Stack = createStackNavigator();

const Router = () => {
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

export default Router;
