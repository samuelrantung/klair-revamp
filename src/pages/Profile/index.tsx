import React, {useCallback, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Button} from '../../components';
import auth from '@react-native-firebase/auth';

const logout = () => {
  auth().signOut();
};

const Profile = () => {
  return (
    <View>
      <Button onPress={() => logout()} label="logout" />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  rowItem: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
