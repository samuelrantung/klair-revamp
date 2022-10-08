import {StyleSheet} from 'react-native';
import {theme} from '../../../../assets/designSystem';

export const styles = StyleSheet.create({
  textInputContainer: {
    width: '100%',
  },
  textInputLabel: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: 16,
    color: theme.colors.fontDark,
  },
  textInputField: {
    borderColor: theme.colors.borderGray,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    width: '100%',
    paddingHorizontal: 16,
  },
  textInputPasswordContainer: {
    borderColor: theme.colors.borderGray,
    borderWidth: 1,
    borderRadius: 8,
    marginTop: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 16,
  },
  textInputPasswordField: {
    paddingHorizontal: 16,
    flex: 1,
  },
});
