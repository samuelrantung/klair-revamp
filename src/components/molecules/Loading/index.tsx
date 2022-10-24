import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../../assets/designSystem';

const Loading = () => {
  return <View style={styles.container} />;
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.transparent,
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
