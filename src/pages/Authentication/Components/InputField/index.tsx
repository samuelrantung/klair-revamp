import {View, Text, TextInput} from 'react-native';
import React, {Dispatch, SetStateAction} from 'react';
import {EyeIcon} from '../../../../assets/icons';
import {styles} from './styles';
import {TextInter} from '../../../../components';

const TextInputComponent: React.FC<{
  label?: string;
  placeholder?: string;
  isPassword?: boolean;
  showPassword?: boolean;
  setShowPassword?: Dispatch<SetStateAction<boolean>>;
}> = ({label, placeholder, isPassword, showPassword, setShowPassword}) => {
  const eyeOnPress = () => {
    if (setShowPassword) {
      setShowPassword(!showPassword);
    }
  };

  return (
    <View style={styles.textInputContainer}>
      <TextInter style={styles.textInputLabel}>{label}</TextInter>
      {isPassword ? (
        <View style={styles.textInputPasswordContainer}>
          <TextInput
            style={styles.textInputPasswordField}
            placeholder={placeholder}
            secureTextEntry={showPassword}
          />
          <EyeIcon onPress={() => eyeOnPress()} />
        </View>
      ) : (
        <TextInput style={styles.textInputField} placeholder={placeholder} />
      )}
    </View>
  );
};

export default TextInputComponent;
