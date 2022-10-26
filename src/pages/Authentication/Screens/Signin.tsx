import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../../assets/designSystem';
import Gap from '../../../components/atoms/Gap';
import TextInputComponent from '../Components/InputField';
import Button from '../../../components/atoms/Button';
import TextInter from '../../../components/atoms/TextInter';
import SocialSignInButton from '../Components/SocialSignInButton';
import {useNavigation} from '@react-navigation/native';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {getData} from '../../../utils/asyncStorage';
import {FormValues} from '../Types';
import {handleGoogleSignIn, handleSignIn} from '../Controller';
import Loading from '../../../components/molecules/Loading';

const Signin = () => {
  const navigation = useNavigation<any>();
  const {...methods} = useForm<FormValues>(); // react-hook-form methods

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    setLoading(true);

    // Clear error message when click sign
    setEmailError('');
    setPasswordError('');

    handleSignIn(data, navigation)
      .then(() => setLoading(false))
      .catch((error: string) => {
        setLoading(false);

        // Handle error code
        if (error === 'auth/user-not-found') {
          setEmailError('User not found');
        }

        if (error === 'auth/invalid-email') {
          setEmailError('User not found');
        }

        if (error === 'auth/wrong-password') {
          setPasswordError('Wrong password');
        }
      });
  };

  const onError: SubmitErrorHandler<FormValues> = errors => {
    errors.email?.message && setEmailError(errors.email.message);
    errors.password?.message && setPasswordError(errors.password.message);
  };

  return (
    <>
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
              required: 'Email is required',
              pattern: {
                value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
                message: 'Wrong email format',
              },
            }}
          />

          <TextInputComponent
            name="password"
            label="Password"
            placeholder="your password"
            isPassword={true}
            error={passwordError}
            rules={{required: 'Password is required'}}
            setError={setPasswordError}
          />

          <Gap height={10} />

          <View style={styles.buttonContainer}>
            <View style={styles.signButtonContainer}>
              <Button
                onPress={methods.handleSubmit(data => onSubmit(data), onError)}
                label="Sign In"
                isLoading={loading}
              />

              <Gap height={5} />

              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <TextInter style={styles.signupText}>
                  Don't Have Any Account? Sign Up
                </TextInter>
              </TouchableOpacity>
            </View>
            <Gap height={'25%'} />
            <SocialSignInButton
              onPress={() => {
                handleGoogleSignIn().catch(e => console.log('error', e));
              }}
              type="google"
            />
            <Gap height={24} />
            {Platform.OS === 'ios' && (
              <SocialSignInButton
                onPress={() => {
                  getData('userAuthState').then(res => console.log('res', res));
                }}
                type="apple"
              />
            )}
          </View>
        </FormProvider>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 24,
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
  buttonContainer: {
    flex: 1,
    width: '100%',
  },
  signButtonContainer: {
    alignItems: 'center',
  },
});
