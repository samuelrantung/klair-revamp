import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {Item} from './types';
import {theme} from '../../../../assets/designSystem';

const CardBase: FC<PropsWithChildren<RenderItemParams<Item>>> = ({
  drag,
  isActive,
  children,
}) => {
  return (
    <ScaleDecorator>
      <View
        style={[
          styles.card,
          theme.cardShadow,
          {
            backgroundColor: isActive
              ? theme.colors.borderGray
              : theme.colors.white,
          },
        ]}>
        {children}
        <TouchableWithoutFeedback onLongPress={drag}>
          <View style={styles.dragSection} />
        </TouchableWithoutFeedback>
      </View>
    </ScaleDecorator>
  );
};

export default CardBase;

const styles = StyleSheet.create({
  card: {
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
  },

  dragSection: {
    width: 20,
    height: 20,
    backgroundColor: 'yellow',
    position: 'absolute',
    right: 0,
  },
});
