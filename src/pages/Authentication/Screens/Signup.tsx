import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, TextInter} from '../../../components';
import {theme} from '../../../assets/designSystem';
import TextInputComponent from '../Components/InputField';
import {useNavigation} from '@react-navigation/native';
import SocialSignInButton from '../Components/SocialSignInButton';
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import {
  handleAppleSignIn,
  handleGoogleSignIn,
  handleSignUp,
} from '../Controller';
import {AppleButton} from '@invertase/react-native-apple-authentication';
import Loading from '../../../components/molecules/Loading';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Signup = () => {
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
    handleSignUp(data, navigation)
      .then(() => setLoading(false))
      .catch(error => {
        setLoading(false);

        // Handle error code
        if (error === 'auth/email-already-in-use') {
          setEmailError('Email already in use');
        }

        if (error === 'auth/invalid-email') {
          setEmailError('Invalid email');
        }

        if (error === 'auth/weak-password') {
          setPasswordError('Weak password');
        }
      });
  };

  const onError: SubmitErrorHandler<FormValues> = errors => {
    errors.email?.message && setEmailError(errors.email.message);
    errors.password?.message && setPasswordError(errors.password.message);
    console.error('form error', errors);
  };

  return (
    <>
      <View style={styles.container}>
        <TextInter style={styles.title}>
          One Step Closer{'\n'}To Make Things Clear
        </TextInter>
        <TextInter style={styles.subText}>Let’s Us Know You Better</TextInter>
        <Gap height={28} />
        <View style={styles.formContainer}>
          <FormProvider {...methods}>
            <View style={styles.nameFieldContainer}>
              <View style={styles.fieldRow}>
                <TextInputComponent
                  name="firstName"
                  label="First Name"
                  placeholder="your name"
                  rules={{required: 'Required'}}
                />
              </View>
              <Gap width={14} />
              <View style={styles.fieldRow}>
                <TextInputComponent
                  name="lastName"
                  label="Last Name"
                  placeholder="your name"
                  rules={{required: 'Required'}}
                />
              </View>
            </View>
            <Gap height={10} />
            <TextInputComponent
              name="email"
              label="Email"
              keyboardType="email-address"
              placeholder="example@gmail.com"
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
            <Gap height={10} />
            <TextInputComponent
              name="password"
              label="Password"
              isPassword={true}
              placeholder="your password"
              error={passwordError}
              setError={setPasswordError}
              rules={{required: 'Password is required'}}
            />
            <Gap height={10} />

            <View style={styles.buttonContainer}>
              <View style={styles.signButtonContainer}>
                <Button
                  onPress={methods.handleSubmit(
                    data => onSubmit(data),
                    onError,
                  )}
                  label="Sign Up"
                  isLoading={loading}
                />

                <Gap height={5} />

                <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
                  <TextInter style={styles.signinText}>
                    Don't Have Any Account? Sign In
                  </TextInter>
                </TouchableOpacity>
              </View>

              <SocialSignInButton
                onPress={() =>
                  handleGoogleSignIn().catch(e => console.log('error', e))
                }
                type="google"
              />
              <Gap height={12} />
              {Platform.OS === 'ios' && (
                <SocialSignInButton
                  onPress={() => handleAppleSignIn()}
                  type="apple"
                />
              )}
            </View>
          </FormProvider>
        </View>
      </View>
      {loading && <Loading />}
    </>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 27,
    backgroundColor: theme.colors.background,
  },
  title: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 32,
  },
  subText: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 20,
    marginTop: 12,
  },

  formContainer: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
  },
  nameFieldContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  fieldRow: {
    flex: 1,
  },

  signinText: {
    color: theme.colors.fontDark,
    marginTop: 4,
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 12,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  signButtonContainer: {
    alignItems: 'center',
    flex: 1,
  },
});
