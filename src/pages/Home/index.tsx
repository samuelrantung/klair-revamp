import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, TextInter} from '../../components';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {getData} from '../../utils/asyncStorage';
import BurgerMenuIcon from '../../assets/icons/burger-menu-icon.svg';
import {IMGKlairText} from '../../assets/images';
import {theme} from '../../assets/designSystem';
import DraggableFlatList, {
  NestableDraggableFlatList,
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {TouchableOpacity} from 'react-native-gesture-handler';

type Item = {
  key: string;
  label: string;
  height: number;
  width: number;
  type: string;
};

const defaultStack = ['goals', 'history'];

const NUM_ITEMS = 2;

const initialData: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
  return {
    key: `item-${index}`,
    label: String(index) + '',
    height: 100,
    width: 60 + Math.random() * 40,
    type: defaultStack[index],
  };
});

const renderCard = ({item, drag, isActive}: RenderItemParams<Item>) => {
  switch (item.type) {
    case defaultStack[0]: {
      return (
        <ScaleDecorator>
          <TouchableOpacity
            onLongPress={drag}
            disabled={isActive}
            style={[
              styles.card,
              {
                backgroundColor: isActive
                  ? theme.colors.borderGray
                  : theme.colors.white,
              },
            ]}>
            <View style={styles.goalsContainer}>
              <View style={styles.goalsProgressContainer}></View>
              <Gap width={28} />
              <View style={styles.goalsTextContainer}>
                <TextInter style={styles.goalsTitle}>TRANSPORTATION</TextInter>
                <Gap height={8} />
                <View style={styles.goalsTextRowContainer}>
                  <TextInter>Monthly Budget</TextInter>
                  <Gap height={8} />
                  <TextInter>IDR 500.000</TextInter>
                </View>
                <View style={styles.goalsTextRowContainer}>
                  <TextInter>Used This Month</TextInter>
                  <Gap height={8} />
                  <TextInter>IDR 500.000</TextInter>
                </View>
                <View style={styles.goalsTextRowContainer}>
                  <TextInter>Budget Balance</TextInter>
                  <Gap height={8} />
                  <TextInter>IDR 500.000</TextInter>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScaleDecorator>
      );
    }
    case defaultStack[1]: {
      return (
        <ScaleDecorator>
          <TouchableOpacity
            onLongPress={drag}
            disabled={isActive}
            style={[
              styles.card,
              {
                backgroundColor: isActive
                  ? theme.colors.borderGray
                  : theme.colors.white,
              },
            ]}>
            <Text style={styles.text}>{item.type} hehe</Text>
          </TouchableOpacity>
        </ScaleDecorator>
      );
    }
  }
  return (
    <ScaleDecorator>
      <TouchableOpacity
        onLongPress={drag}
        disabled={isActive}
        style={[
          styles.rowItem,
          {
            backgroundColor: isActive
              ? theme.colors.borderGray
              : item.backgroundColor,
          },
        ]}>
        <Text style={styles.text}>{item.type}</Text>
      </TouchableOpacity>
    </ScaleDecorator>
  );
};

const Home = () => {
  const navigation = useNavigation();
  const [data, setData] = useState(initialData);
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
        {/* <Button onPress={() => logout()} label="logout" />
        <Button
          onPress={() => {
            getData('userAuthState').then(res => console.log('res ', res));
          }}
          label="check state"
        /> */}
        <DraggableFlatList
          data={data}
          onDragEnd={({data}) => setData(data)}
          keyExtractor={item => item.key}
          renderItem={renderCard}
        />
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
  card: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,

    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    elevation: 2,
  },

  goalsContainer: {
    flexDirection: 'row',
  },
  goalsProgressContainer: {
    backgroundColor: 'blue',
    width: 88,
    height: 88,
    borderRadius: 50,
  },

  goalsTextContainer: {
    flex: 1,
  },
  goalsTitle: {
    fontSize: 16,
    color: theme.colors.fontDark,
    fontFamily: theme.fonts.inter.medium,
  },
  goalsTextRowContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
});
