import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, TextInter} from '../../../components';
import {theme} from '../../../assets/designSystem';
import TextInputComponent from '../Components/InputField';
import text from '../../../utils/text';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../types';
import SocialSignInButton from '../Components/SocialSignInButton';
import {
  Controller,
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from 'react-hook-form';

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const Signup = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const {...methods} = useForm<FormValues>();

  const handleSignUp: SubmitHandler<FormValues> = (data: FormValues) => {
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
          <Button
            onPress={methods.handleSubmit(handleSignUp, onError)}
            label="Sign Up"
          />
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <TextInter style={styles.signinText}>
              Don't Have Any Account? Sign In
            </TextInter>
          </TouchableOpacity>
        </FormProvider>
      </View>

      <View style={styles.socialContainer}>
        <SocialSignInButton type="google" />
        <Gap height={12} />
        <SocialSignInButton type="facebook" />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
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
  socialContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
});
