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
  type?: 'primary' | 'secondary';
}

const Button = (props: ButtonProps) => {
  const {label, style, isLoading = false, type, ...touchableProps} = props;

  return (
    <TouchableOpacity
      style={[
        styles.buttonStyles,
        style,
        type === 'secondary' ? styles.secondary : styles.primary,
      ]}
      {...touchableProps}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="small" color={theme.colors.white} />
        </View>
      ) : (
        <TextInter
          style={[styles.label, type === 'secondary' && styles.secondaryLabel]}>
          {label}
        </TextInter>
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonStyles: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.white,
  },
  secondary: {
    backgroundColor: theme.colors.white,
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },

  label: {
    color: theme.colors.white,
    fontSize: 16,
    fontFamily: theme.fonts.inter.semiBold,
    lineHeight: 22,
  },
  secondaryLabel: {
    color: theme.colors.primary,
  },
  loadingContainer: {
    height: 22,
  },
});
