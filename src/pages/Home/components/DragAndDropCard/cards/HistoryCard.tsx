import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInter} from '../../../../../components';
import {theme} from '../../../../../assets/designSystem';

const HistoryCard = () => {
  return (
    <View>
      <TextInter style={styles.title}>WALLET TRANSACTION HISTORY</TextInter>
      <View style={[theme.cardShadow, styles.transactionCard]}>
        <TextInter>Food</TextInter>
      </View>
      <View style={[theme.cardShadow, styles.transactionCard]}>
        <TextInter>Food</TextInter>
      </View>
      <View style={[theme.cardShadow, styles.transactionCard]}>
        <TextInter>Food</TextInter>
      </View>
    </View>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: 16,
    marginBottom: 12,
  },
  transactionCard: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: theme.colors.background,
    marginBottom: 12,
  },
});
