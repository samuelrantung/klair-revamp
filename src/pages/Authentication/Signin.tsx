import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {theme} from '../../assets/designSystem';
import {EyeIcon} from '../../assets/icons';

const TextInputComponent: React.FC<{
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
}> = ({label, placeholder, isPassword}) => {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputLabel}>{label}</Text>
      {isPassword ? (
        <View style={styles.textInputPasswordContainer}>
          <TextInput
            style={styles.textInputPasswordField}
            placeholder={placeholder}
            secureTextEntry={isPassword}
          />
          <EyeIcon />
        </View>
      ) : (
        <TextInput style={styles.textInputField} placeholder={placeholder} />
      )}
    </View>
  );
};

const Signin = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Welcome To Klair</Text>
        <Text style={styles.subTitle}>Let's Be Clear</Text>
      </View>
      <TextInputComponent label="Email" placeholder="example@gmail.com" />
      <TextInputComponent
        label="Password"
        placeholder="your password"
        isPassword={true}
      />
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    fontFamily: 'Inter-Bold',
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logoContainer: {
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
  },
  titleContainer: {
    width: '100%',
    marginTop: 56,
    marginBottom: 34,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 32,
    color: theme.colors.fontDark,
  },
  subTitle: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: 20,
    color: theme.colors.fontDark,
    marginTop: 17,
  },

  /* TextInputComponent */
  textInputContainer: {
    width: '100%',
  },
  textInputLabel: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: 16,
    color: theme.colors.fontDark,
  },
  textInputField: {
    borderColor: theme.colors.borderGray,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    width: '100%',
    paddingHorizontal: 16,
  },
  textInputPasswordContainer: {
    borderColor: theme.colors.borderGray,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
  },
  textInputPasswordField: {
    paddingHorizontal: 16,
    flex: 1,
  },
});
