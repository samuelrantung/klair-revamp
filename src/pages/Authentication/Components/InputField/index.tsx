import {View, Text, TextInput, TextInputProps} from 'react-native';
import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {EyeIcon} from '../../../../assets/icons';
import {styles} from './styles';
import {TextInter} from '../../../../components';
import _ from 'lodash';
import {
  useController,
  UseControllerProps,
  useFormContext,
} from 'react-hook-form';

/*
 *
 * react-hook-form for react-native reference:
 * 'https://echobind.com/post/react-hook-form-for-react-native'
 *
 */

interface TextInputComponentProps extends TextInputProps, UseControllerProps {
  label?: string;
  name: string;
  placeholder?: string;
  isPassword?: boolean;
  error?: string;
  defaultValue?: string;
  setError?: Dispatch<SetStateAction<string>>;
}

const ControlledInput = (props: TextInputComponentProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const formContext = useFormContext();
  const {formState} = formContext;

  const {
    name,
    label,
    placeholder,
    isPassword,
    rules,
    defaultValue,
    error,
    setError,
    ...inputProps
  } = props;

  const {field} = useController({name, rules, defaultValue});

  const eyeOnPress = () => {
    if (setShowPassword) {
      setShowPassword(!showPassword);
    }
  };

  const hasError = Boolean(formState?.errors[name]);
  useEffect(() => {
    if (error && setError) {
      const errorMessage = formState.errors[name]?.message?.toString() ?? '';
      setError(errorMessage);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState?.errors[name]]);

  return (
    <View style={styles.componentContainer}>
      {label && <TextInter style={styles.textInputLabel}>{label}</TextInter>}
      {!isPassword ? (
        <>
          <View
            style={[
              styles.textInputOuterContainer,
              (!_.isEmpty(error) || hasError) &&
                styles.textInputOuterErrorContainer,
            ]}>
            <View
              style={[
                styles.textInputContainer,
                (!_.isEmpty(error) || hasError) && styles.error,
              ]}>
              <TextInput
                style={styles.textInputField}
                placeholder={placeholder}
                onChangeText={field.onChange}
                value={field.value}
                {...inputProps}
              />
            </View>
          </View>
          <TextInter style={styles.errorMessage}>
            {error ? error : hasError && formState.errors[name]?.message}{' '}
          </TextInter>
        </>
      ) : (
        <>
          <View
            style={[
              styles.textInputOuterContainer,
              !_.isEmpty(error) && styles.textInputOuterErrorContainer,
            ]}>
            <View
              style={[
                styles.textInputContainer,
                !_.isEmpty(error) && styles.error,
              ]}>
              <TextInput
                style={styles.textInputField}
                placeholder={placeholder}
                secureTextEntry={!showPassword}
                onChangeText={field.onChange}
                value={field.value}
                {...inputProps}
              />
              <EyeIcon style={styles.eye} onPress={() => eyeOnPress()} />
            </View>
          </View>
          <TextInter style={styles.errorMessage}>{error}</TextInter>
        </>
      )}
    </View>
  );
};

const TextInputComponent = (props: TextInputComponentProps) => {
  const {name} = props;

  const formContext = useFormContext();

  if (!formContext || !name) {
    const msg = !formContext
      ? 'TextInput must be wrapped by the FormProvider'
      : 'Name must be defined';
    console.error(msg);
    return null;
  }

  return <ControlledInput {...props} />;
};

export default TextInputComponent;
