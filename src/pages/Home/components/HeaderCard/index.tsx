import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../../../assets/designSystem';
import {TextInter} from '../../../../components';
import Carousel from 'react-native-reanimated-carousel';
import BankCard from './BankCard';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {changeWallet} from '../../../../redux/slices/wallet/walletSlice';

const wallet = ['all', 'mandiri', 'bni', 'dana', 'dompet'];

const HeaderCard = () => {
  const dispatch = useDispatch();
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={[theme.colors.primary, theme.colors.lightGold]}
      style={[styles.container, theme.cardShadow]}>
      <View style={styles.walletInformationContainer}>
        <TextInter style={styles.walletName}>ALL WALLETS</TextInter>
        <TextInter style={styles.walletBalance}>IDR 138.000</TextInter>
        <TouchableOpacity>
          <TextInter style={styles.wealthButton}>How is my wealth?</TextInter>
        </TouchableOpacity>
      </View>
      <View style={styles.bankContainer}>
        <Carousel
          vertical
          height={140}
          loop={false}
          snapEnabled={true}
          mode="parallax"
          modeConfig={{
            parallaxScrollingScale: 0.9,
            parallaxScrollingOffset: 93,
          }}
          data={wallet}
          onSnapToItem={i => dispatch(changeWallet(wallet[i]))}
          renderItem={({index, animationValue}) => {
            return (
              <BankCard
                index={index}
                animationValue={animationValue}
                wallet={wallet[index]}
              />
            );
          }}
        />
      </View>
    </LinearGradient>
  );
};

export default HeaderCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.white,
    marginBottom: 8,
    flexDirection: 'row',
  },
  walletInformationContainer: {
    flex: 7,
    justifyContent: 'center',
  },
  walletName: {
    fontSize: 20,
    fontFamily: theme.fonts.inter.medium,
    color: theme.colors.fontLight,
  },
  walletBalance: {
    fontSize: 28,
    fontFamily: theme.fonts.inter.semiBold,
    color: theme.colors.fontLight,
  },
  wealthButton: {
    color: theme.colors.fontGray,
    fontSize: 12,
  },

  bankContainer: {
    flex: 4,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 140,
  },

  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
    margin: 2,
    borderColor: '#2a4944',
    borderWidth: 1,
    backgroundColor: '#d2f7f1',
  },
});
