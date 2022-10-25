import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DraggableFlatList, {
  RenderItemParams,
} from 'react-native-draggable-flatlist';
import {Gap, TextInter} from '../../../../components';
import {theme} from '../../../../assets/designSystem';
import {Item} from './types';
import CardBase from './CardBase';

const defaultStack = ['goals', 'history'];

const NUM_ITEMS = 2;

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
          <View style={styles.goalsContainer}>
            <View style={styles.goalsProgressContainer}></View>
            <Gap width={28} />
            <View style={styles.goalsTextContainer}>
              <TextInter style={styles.goalsTitle}>TRANSPORTATION</TextInter>
              <Gap height={8} />
              <View style={styles.goalsTextRowContainer}>
                <TextInter>Monthly Budget</TextInter>
                <Gap height={8} />
                <TextInter>IDR 500.000</TextInter>
              </View>
              <View style={styles.goalsTextRowContainer}>
                <TextInter>Used This Month</TextInter>
                <Gap height={8} />
                <TextInter>IDR 500.000</TextInter>
              </View>
              <View style={styles.goalsTextRowContainer}>
                <TextInter>Budget Balance</TextInter>
                <Gap height={8} />
                <TextInter>IDR 500.000</TextInter>
              </View>
            </View>
          </View>
        </CardBase>
      );
    }
    case defaultStack[1]: {
      return (
        <CardBase item={item} drag={drag} isActive={isActive}>
          <Text style={styles.text}>{item.type} hehe</Text>
        </CardBase>
      );
    }
  }
  return (
    <CardBase item={item} drag={drag} isActive={isActive}>
      <Text style={styles.text}>{item.type} hehe</Text>
    </CardBase>
  );
};

const DragAndDropCard = () => {
  const [data, setData] = useState(initialData);

  return (
    <DraggableFlatList
      data={data}
      onDragEnd={({data}) => setData(data)}
      keyExtractor={item => item.key}
      renderItem={renderCard}
    />
  );
};

export default DragAndDropCard;

const styles = StyleSheet.create({
  goalsContainer: {
    flexDirection: 'row',
  },
  goalsProgressContainer: {
    backgroundColor: 'blue',
    width: 88,
    height: 88,
    borderRadius: 50,
  },

  goalsTextContainer: {
    flex: 1,
  },
  goalsTitle: {
    fontSize: 16,
    color: theme.colors.fontDark,
    fontFamily: theme.fonts.inter.medium,
  },
  goalsTextRowContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
});
