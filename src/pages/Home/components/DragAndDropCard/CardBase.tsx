import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {
  RenderItemParams,
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {Item} from './types';
import {theme} from '../../../../assets/designSystem';
import DragIcon from '../../../../assets/icons/drag-icon.svg';

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
          // eslint-disable-next-line react-native/no-inline-styles
          {
            backgroundColor: theme.colors.backgroundLight,
            borderColor: isActive
              ? theme.colors.primary
              : theme.colors.transparent,
            borderWidth: 1,
          },
        ]}>
        {children}
        <TouchableWithoutFeedback onLongPress={drag}>
          <View style={styles.dragSection}>
            <DragIcon />
          </View>
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
    padding: 4,
    position: 'absolute',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
