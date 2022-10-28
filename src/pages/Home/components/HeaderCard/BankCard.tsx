import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {TextInter} from '../../../../components';
import {theme} from '../../../../assets/designSystem';

interface ItemProps {
  index: number;
  animationValue: Animated.SharedValue<number>;
  wallet: string;
}

const BankCard: FC<ItemProps> = ({index, animationValue, wallet}) => {
  const maskStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      [theme.colors.primary, theme.colors.beige, theme.colors.primary],
    );

    return {
      backgroundColor,
    };
  }, [animationValue]);
  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.bankCardContainer, maskStyle]}>
      <TextInter>{wallet}</TextInter>
    </Animated.View>
  );
};

export default BankCard;

const styles = StyleSheet.create({
  bankCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 44,
    width: 114 * 1.1,
    marginTop: 48,
  },
});
