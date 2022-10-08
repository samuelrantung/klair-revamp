import {Text, TouchableOpacity, StyleSheet, TextStyle} from 'react-native';
import React from 'react';
import {theme} from '../../assets/designSystem';
import TextInter from './TextInter';

const Button: React.FC<{
  label: string;
  backgroundColor?: string;
  customLabelStyles?: TextStyle | TextStyle[];
  styles?: TextStyle | TextStyle[];
}> = ({label, backgroundColor, customLabelStyles, styles}) => {
  const labelStylesProps = Array.isArray(customLabelStyles)
    ? Object.assign({}, ...customLabelStyles)
    : customLabelStyles;

  const customStyles = Array.isArray(styles)
    ? Object.assign({}, ...styles)
    : styles;

  return (
    <TouchableOpacity
      style={[buttonStyles(backgroundColor).button, customStyles]}>
      <TextInter style={[labelStyles().label, labelStylesProps]}>
        {label}
      </TextInter>
    </TouchableOpacity>
  );
};

export default Button;

const buttonStyles = (backgroundColor: string = '#FFB319') =>
  StyleSheet.create({
    button: {
      backgroundColor: backgroundColor,
      width: '100%',
      borderRadius: 8,
      alignItems: 'center',
      paddingVertical: 14,
    },
  });

const labelStyles = () =>
  StyleSheet.create({
    label: {
      color: theme.colors.white,
      fontSize: 16,
      fontFamily: theme.fonts.inter.semiBold,
    },
  });
