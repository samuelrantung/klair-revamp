import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../../assets/designSystem';
import Gap from '../../../components/atoms/Gap';
import TextInputComponent from '../Components/InputField';
import Button from '../../../components/atoms/Button';
import TextInter from '../../../components/atoms/TextInter';

const Signin = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer} />
      <View style={styles.titleContainer}>
        <TextInter style={styles.title}>Welcome To Klair</TextInter>
        <TextInter style={styles.subTitle}>Let's Be Clear</TextInter>
      </View>
      <TextInputComponent label="Email" placeholder="example@gmail.com" />
      <Gap height={24} />
      <TextInputComponent
        label="Password"
        placeholder="your password"
        isPassword={true}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      <Button label="Sign In" />
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
});
