import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {TextInter} from '../../../../components';
import GoogleIcon from '../../../../assets/icons/google-icon.svg';
import FacebookIcon from '../../../../assets/icons/facebook-icon.svg';
import {theme} from '../../../../assets/designSystem';

const SocialSignInButton: React.FC<{
  type: string;
}> = ({type}) => {
  return (
    <View>
      {type === 'google' && (
        <TouchableOpacity style={styles.button}>
          <View style={styles.icon}>
            <GoogleIcon />
          </View>
          <TextInter style={styles.label}>Google</TextInter>
          <View style={styles.icon} />
        </TouchableOpacity>
      )}
      {type === 'facebook' && (
        <TouchableOpacity style={styles.button}>
          <View style={styles.icon}>
            <FacebookIcon />
          </View>
          <TextInter style={styles.label}>Facebook</TextInter>
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
