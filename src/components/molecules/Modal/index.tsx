import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux';
import {closeModal} from '../../../redux/slices/modal/modalSlice';
import {theme} from '../../../assets/designSystem';
import {WarningIcon} from '../../../assets/icons';
import {Button, Gap, TextInter} from '../../atoms';

const Modal = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ModalReducer.isOpen);
  return (
    <ReactNativeModal
      backdropOpacity={0.3}
      isVisible={isOpen}
      useNativeDriverForBackdrop={true}
      onBackdropPress={() => dispatch(closeModal())}>
      <View style={styles.container}>
        <WarningIcon />
        <Gap height={20} />
        <View style={styles.titleContainer}>
          <TextInter style={styles.title}>Sure want to cancel?</TextInter>
          <Gap height={8} />
          <TextInter style={styles.subTitle}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.{' '}
          </TextInter>
        </View>
        <View style={styles.footer}>
          <Button label="Yes" />
          <Gap height={16} />
          <Button
            onPress={() => dispatch(closeModal())}
            label="No"
            type="secondary"
          />
        </View>
      </View>
    </ReactNativeModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    width: '100%',
    height: 462,
    borderRadius: 32,
    paddingHorizontal: 16,
    paddingVertical: 32,
    alignItems: 'center',
  },
  titleContainer: {
    marginHorizontal: 60 - 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fonts.inter.semiBold,
    fontSize: 18,
  },
  subTitle: {
    color: theme.colors.fontGray,
    textAlign: 'center',
  },

  footer: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
});
