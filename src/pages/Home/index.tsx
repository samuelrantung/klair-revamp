import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../components';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {getData} from '../../utils/asyncStorage';

const Home = () => {
  const navigation = useNavigation();
  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.reset({index: 0, routes: [{name: 'Signin'}]});
        console.log('user signed out');
      });
  };
  return (
    <SafeAreaView>
      <View>
        <Text>Home</Text>
        <Button onPress={() => logout()} label="logout" />
        <Button
          onPress={() => {
            getData('userAuthState').then(res => console.log('res ', res));
          }}
          label="check state"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
