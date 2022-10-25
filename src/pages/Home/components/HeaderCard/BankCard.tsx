import {StyleSheet, Text, View} from 'react-native';
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
}

const BankCard: FC<ItemProps> = ({index, animationValue}) => {
  const maskStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animationValue.value,
      [-1, 0, 1],
      [theme.colors.beige, theme.colors.primary, theme.colors.beige],
    );

    return {
      backgroundColor,
    };
  }, [animationValue]);
  return (
    <Animated.View
      pointerEvents="none"
      style={[styles.bankCardContainer, maskStyle]}>
      <TextInter>{index}</TextInter>
    </Animated.View>
  );
};

export default BankCard;

const styles = StyleSheet.create({
  bankCardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    height: 50,
    width: 114 * 1.1,
    marginTop: 45,
  },
});
