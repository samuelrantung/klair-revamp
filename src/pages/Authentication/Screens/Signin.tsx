import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {theme} from '../../../assets/designSystem';
import Gap from '../../../components/atoms/Gap';
import TextInputComponent from '../Components/InputField';
import Button from '../../../components/atoms/Button';
import TextInter from '../../../components/atoms/TextInter';
import SocialSignInButton from '../Components/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../types';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

const Signin = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  // const [showPassword, setShowPassword] = useState<boolean>(false);

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const {...methods} = useForm<FormValues>();

  const handleSignIn: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log('clicked', data);
    setEmailError('error dari api');
  };

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    errors.email?.message && setEmailError(errors.email.message);
    errors.password?.message && setPasswordError(errors.password.message);
    console.error('form error', errors);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer} />

      <View style={styles.titleContainer}>
        <TextInter style={styles.title}>Welcome To Klair</TextInter>
        <TextInter style={styles.subTitle}>Let's Be Clear</TextInter>
      </View>

      <FormProvider {...methods}>
        <TextInputComponent
          name="email"
          label="Email"
          placeholder="example@gmail.com"
          keyboardType="email-address"
          error={emailError}
          setError={setEmailError}
          rules={{
            required: 'Email is required!',
            pattern: {
              value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
              message: 'Wrong email format',
            },
          }}
        />

        <Gap height={5} />

        <TextInputComponent
          name="password"
          label="Password"
          placeholder="your password"
          isPassword={true}
          error={passwordError}
          rules={{required: 'Password is required!'}}
          setError={setPasswordError}
        />

        <Gap height={10} />

        <Button
          onPress={methods.handleSubmit(handleSignIn, onError)}
          label="Sign In"
        />
      </FormProvider>

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
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  logoContainer: {
    backgroundColor: 'yellow',
    width: 100,
    height: 100,
  },
  titleContainer: {
    width: '100%',
    marginTop: 16,
    marginBottom: 12,
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
    marginTop: 4,
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 12,
  },
  socialContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
});
