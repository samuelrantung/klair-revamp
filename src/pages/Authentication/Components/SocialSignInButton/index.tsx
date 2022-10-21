import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import {TextInter} from '../../../../components';
import GoogleIcon from '../../../../assets/icons/google-icon.svg';
import FacebookIcon from '../../../../assets/icons/facebook-icon.svg';
import AppleIcon from '../../../../assets/icons/apple-icon.svg';
import {theme} from '../../../../assets/designSystem';

interface ButtonProps extends TouchableOpacityProps {
  type: string;
}

const SocialSignInButton = (props: ButtonProps) => {
  const {type, ...touchableProps} = props;
  return (
    <View>
      {type === 'google' && (
        <TouchableOpacity style={styles.button} {...touchableProps}>
          <View style={styles.icon}>
            <GoogleIcon />
          </View>
          <TextInter style={styles.label}>Google</TextInter>
          <View style={styles.icon} />
        </TouchableOpacity>
      )}
      {type === 'facebook' && (
        <TouchableOpacity style={styles.button} {...touchableProps}>
          <View style={styles.icon}>
            <FacebookIcon />
          </View>
          <TextInter style={styles.label}>Facebook</TextInter>
          <View style={styles.icon} />
        </TouchableOpacity>
      )}
      {type === 'apple' && (
        <TouchableOpacity
          style={[styles.button, {backgroundColor: theme.colors.black}]}
          {...touchableProps}>
          <View style={styles.icon}>
            <AppleIcon />
          </View>
          <TextInter style={[styles.label, {color: theme.colors.white}]}>
            Apple
          </TextInter>
          <View style={styles.icon} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SocialSignInButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: theme.colors.white,
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
  },
  icon: {
    width: 16,
    height: 16,
  },
  label: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 14,
    color: theme.colors.fontDark,
  },
});
