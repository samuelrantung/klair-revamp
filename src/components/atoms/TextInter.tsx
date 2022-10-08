import {StyleSheet, Text, TextStyle} from 'react-native';
import React from 'react';
import {theme} from '../../assets/designSystem';

type CustomTextProps = {
  style?: TextStyle | TextStyle[];
  children: any;
};

const TextInter: React.FC<CustomTextProps> = ({children, style}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return <Text style={[styles.text, {...passedStyles}]}>{children}</Text>;
};

export default TextInter;

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fonts.inter.regular,
    color: theme.colors.fontDark,
  },
});
