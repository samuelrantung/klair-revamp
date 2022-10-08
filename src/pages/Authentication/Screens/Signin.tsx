import {
  StyleSheet,
  Touchable,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../../assets/designSystem';
import Gap from '../../../components/atoms/Gap';
import TextInputComponent from '../Components/InputField';
import Button from '../../../components/atoms/Button';
import TextInter from '../../../components/atoms/TextInter';
import SocialSignInButton from '../Components/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../types';

const Signin = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
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

      <Gap height={24} />

      <Button label="Sign In" />

      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <TextInter style={styles.signupText}>
          Don't Have Any Account? Sign Up
        </TextInter>
      </TouchableOpacity>

      <View style={styles.socialContainer}>
        <SocialSignInButton type="google" />
        <Gap height={24} />
        <SocialSignInButton type="facebook" />
      </View>
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
    paddingTop: 40,
  },
  logoContainer: {
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
  },
  titleContainer: {
    width: '100%',
    marginTop: 24,
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
    marginTop: 12,
  },

  signupText: {
    color: theme.colors.fontDark,
    marginTop: 8,
    fontFamily: theme.fonts.inter.semiBold,
  },
  socialContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
});
