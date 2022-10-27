import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import BurgerMenuIcon from '../../assets/icons/burger-menu-icon.svg';
import {IMGKlairText} from '../../assets/images';
import {theme} from '../../assets/designSystem';
import DragAndDropCard from './components/DragAndDropCard';
import HeaderCard from './components/HeaderCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FAB from '../../components/molecules/FloatingActionButton/FAB';
import SubButton from '../../components/molecules/FloatingActionButton/SubButton.js';

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerLeftContainer}>
          <BurgerMenuIcon />
        </View>
        <View style={styles.headerMiddleContainer}>
          <Image source={IMGKlairText} style={styles.logo} />
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}
          style={styles.headerRightContainer}>
          <View style={styles.profilePicture} />
        </TouchableOpacity>
      </View>
      <DragAndDropCard>
        <View style={styles.innerContainer}>
          <HeaderCard />
          {/* <Button
          onPress={() => {
            getData('userAuthState').then(res => console.log('res ', res));
          }}
          label="check state"
        /> */}
        </View>
      </DragAndDropCard>
      <FAB>
        <SubButton onPress={() => Alert.alert('Pressed 1!')} label="1" />
        <SubButton onPress={() => Alert.alert('Pressed 2!')} label="2" />
        <SubButton onPress={() => Alert.alert('Pressed 3!')} label="3" />
        <SubButton onPress={() => Alert.alert('Pressed 4!')} label="4" />
      </FAB>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingTop: 16,
    paddingBottom: 24,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 4,
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
    paddingTop: 16,
  },
});
