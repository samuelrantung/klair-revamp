import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, TextInter} from '../../../../../components';
import {theme} from '../../../../../assets/designSystem';

const GoalsCard = () => {
  return (
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
  );
};

export default GoalsCard;

const styles = StyleSheet.create({
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
