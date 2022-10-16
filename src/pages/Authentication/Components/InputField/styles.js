import {StyleSheet} from 'react-native';
import {theme} from '../../../../assets/designSystem';

export const styles = StyleSheet.create({
  componentContainer: {
    width: '100%',
  },
  textInputLabel: {
    fontFamily: theme.fonts.inter.medium,
    fontSize: 16,
    color: theme.colors.fontDark,
    marginBottom: 4,
  },
  textInputField: {
    paddingHorizontal: 16,
    paddingTop: 6,
    paddingBottom: 8,
    flex: 1,
  },
  textInputOuterContainer: {
    borderWidth: 1,
    borderColor: theme.colors.borderGray,
    borderRadius: 7,
  },
  textInputOuterErrorContainer: {
    borderColor: theme.colors.errorSecondary,
    borderWidth: 2,
    borderRadius: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.errorSecondary,
  },
  textInputContainer: {
    borderWidth: 2,
    borderRadius: 7,
    borderColor: theme.colors.transparent,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  error: {
    borderColor: theme.colors.error,
    borderWidth: 1,
  },
  eye: {
    marginRight: 16,
  },
  errorMessage: {
    color: theme.colors.error,
    fontSize: 12,
    marginTop: 4,
    marginLeft: 2,
  },
});
