import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gap, TextInter} from '../../../components';
import {theme} from '../../../assets/designSystem';
import TextInputComponent from '../Components/InputField';

const Signup = () => {
  return (
    <View style={styles.container}>
      <TextInter style={styles.title}>
        One Step Closer{'\n'}To Make Things Clear
      </TextInter>
      <TextInter style={styles.subText}>Let’s Us Know You Better</TextInter>
      <View style={styles.formContainer}>
        <View style={styles.nameFieldContainer}>
          <View style={styles.fieldRow}>
            <TextInputComponent label="First Name" placeholder="your name" />
          </View>
          <Gap width={14} />
          <View style={styles.fieldRow}>
            <TextInputComponent label="Last Name" placeholder="your name" />
          </View>
        </View>
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
  },
  title: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 32,
  },
  subText: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 20,
    marginTop: 28,
  },

  nameFieldContainer: {
    flexDirection: 'row',
    width: '100%',
  },
  fieldRow: {
    flex: 1,
  },
});
