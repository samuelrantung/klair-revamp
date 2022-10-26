import {StyleSheet, Text, View} from 'react-native';
import React, {FC, ReactElement, useState} from 'react';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import {theme} from '../../../../assets/designSystem';
import {Item} from './types';
import CardBase from './CardBase';
import HistoryCard from './cards/HistoryCard';
import GoalsCard from './cards/GoalsCard';

const defaultStack = ['goals', 'history'];

const NUM_ITEMS = 15;

const initialData: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
  return {
    key: `item-${index}`,
    label: String(index) + '',
    height: 100,
    width: 60 + Math.random() * 40,
    type: defaultStack[index],
  };
});

const renderCard = ({item, drag, isActive}: RenderItemParams<Item>) => {
  switch (item.type) {
    case defaultStack[0]: {
      return (
        <CardBase item={item} drag={drag} isActive={isActive}>
          <GoalsCard />
        </CardBase>
      );
    }
    case defaultStack[1]: {
      return (
        <CardBase item={item} drag={drag} isActive={isActive}>
          <HistoryCard />
        </CardBase>
      );
    }
  }
  return (
    <CardBase item={item} drag={drag} isActive={isActive}>
      <Text style={styles.label}>{item.type} hehe</Text>
    </CardBase>
  );
};

const DragAndDropCard: FC<{children: ReactElement}> = ({children}) => {
  const [data, setData] = useState(initialData);
  return (
    <DraggableFlatList
      ListHeaderComponent={children}
      data={data}
      scrollEnabled
      onDragEnd={({data}) => {
        setData(data);
      }}
      keyExtractor={item => item.key}
      renderItem={renderCard}
    />
  );
};

export default DragAndDropCard;

const styles = StyleSheet.create({
  label: {
    color: theme.colors.fontDark,
  },
});
