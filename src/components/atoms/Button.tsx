import {
  Text,
  TouchableOpacity,
  StyleSheet,
  TextStyle,
  TouchableOpacityProps,
  ActivityIndicator,
  View,
} from 'react-native';
import React from 'react';
import {theme} from '../../assets/designSystem';
import TextInter from './TextInter';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
  backgroundColor?: string;
  customLabelStyles?: TextStyle | TextStyle[];
  styles?: TextStyle | TextStyle[];
  isLoading?: boolean;
}

const Button = (props: ButtonProps) => {
  const {label, style, isLoading = false, ...touchableProps} = props;

  return (
    <TouchableOpacity style={[styles.buttonStyles, style]} {...touchableProps}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={theme.colors.white} />
        </View>
      ) : (
        <TextInter style={styles.label}>{label}</TextInter>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyles: {
    backgroundColor: theme.colors.primary,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    paddingVertical: 14,
  },
  label: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fonts.inter.semiBold,
    lineHeight: 22,
  },
  loadingContainer: {
    height: 22,
  },
});
