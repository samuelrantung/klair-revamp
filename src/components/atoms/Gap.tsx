import React from 'react';
import {View} from 'react-native';

const Gap: React.FC<{width?: number | string; height?: number | string}> = ({
  width,
  height,
}) => {
  return <View style={{width: width, height: height}} />;
};

export default Gap;
