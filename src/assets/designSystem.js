export const palette = {
  gold: '#FFB319',
  black: '#000000',
  dark: '#2C2822',
  white: '#FFFFFF',
  gray1: '#B4B4B4',
};

export const theme = {
  colors: {
    background: palette.white,
    primary: palette.gold,
    fontDark: palette.dark,
    borderGray: palette.gray1,
  },

  button: {
    primary: {
      backgroundColor: palette.gold,
      borderRadius: 8,
      width: '100%',
      paddingVertical: 14,
      alignItems: 'center',
    },
  },

  fonts: {
    inter: {
      /**
       * 900
       */
      black: 'Inter-Black',

      /**
       * 800
       */
      extraBold: 'Inter-ExtraBold',

      /**
       * 700
       */
      bold: 'Inter-Bold',

      /**
       * 600
       */
      semiBold: 'Inter-SemiBold',

      /**
       * 500
       */
      medium: 'Inter-Medium',

      /**
       * 400
       */
      regular: 'Inter-Regular',

      /**
       * 300
       */
      light: 'Inter-Light',

      /**
       * 200
       */
      extraLight: 'Inter-ExtraLight',

      /**
       * 100
       */
      thin: 'Inter-Thin',
    },
  },
};
