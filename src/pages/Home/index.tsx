import {SafeAreaView, ScrollView, StyleSheet, View, Image} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import BurgerMenuIcon from '../../assets/icons/burger-menu-icon.svg';
import {IMGKlairText} from '../../assets/images';
import {theme} from '../../assets/designSystem';
import DragAndDropCard from './components/DragAndDropCard';
import HeaderCard from './components/HeaderCard';

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
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <BurgerMenuIcon />
        </View>
        <View style={styles.headerMiddleContainer}>
          <Image source={IMGKlairText} style={styles.logo} />
        </View>
        <View style={styles.headerRightContainer}>
          <View style={styles.profilePicture} />
        </View>
      </View>

      <View style={styles.innerContainer}>
        <HeaderCard />
        {/* <Button onPress={() => logout()} label="logout" />
        <Button
          onPress={() => {
            getData('userAuthState').then(res => console.log('res ', res));
          }}
          label="check state"
        /> */}
        <DragAndDropCard />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingTop: 16,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  headerLeftContainer: {
    width: 44,
    height: 44,
    justifyContent: 'center',
  },
  headerMiddleContainer: {
    // width: 44,
    // height: 44
  },
  logo: {height: 24, width: 72},
  headerRightContainer: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 44,
    height: 44,
    backgroundColor: 'yellow',
    borderRadius: 50,
  },

  innerContainer: {
    // paddingHorizontal: 16,
  },
});
